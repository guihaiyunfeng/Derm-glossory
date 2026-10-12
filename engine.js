/* 无网络依赖的学习状态与复习调度。浏览器和 Node 共用。 */
(() => {
'use strict';
const DAY_INTERVALS = [1, 3, 7, 14, 30];
const DATASET = 'derma-399-404-v1';
const clone = value => JSON.parse(JSON.stringify(value));
function dateKey(time = Date.now()) {
  const d = new Date(time);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function afterDays(time, days) {
  const d = new Date(time); d.setDate(d.getDate() + days); return dateKey(d.getTime());
}
function empty(now = Date.now()) {
  return { version: 1, dataset: DATASET, words: {}, active: null, history: [], updatedAt: now };
}
function shuffle(items, random = Math.random) {
  const out = [...items];
  for (let i=out.length-1; i>0; i--) { const j=Math.floor(random()*(i+1)); [out[i],out[j]]=[out[j],out[i]]; }
  return out;
}
function weak(record) { return !!record && (record.lastResult === false || (record.lapses > 0 && record.streak < 2)); }
function plan(state, words, now = Date.now(), random = Math.random) {
  const today = dateKey(now);
  const unseen = words.filter(w => !state.words[w.id]);
  const learned = shuffle(words.filter(w => state.words[w.id]), random);
  learned.sort((a,b) => {
    const x=state.words[a.id],y=state.words[b.id];
    const xd=x.due<=today,yd=y.due<=today;
    if(xd!==yd) return xd?-1:1;
    if(xd && x.due!==y.due) return x.due.localeCompare(y.due);
    if(weak(x)!==weak(y)) return weak(x)?-1:1;
    return x.lastSeen-y.lastSeen;
  });
  return {fresh:shuffle(unseen,random).slice(0,15), review:learned.slice(0,45), due:learned.filter(w=>state.words[w.id].due<=today).length};
}
function start(state, words, now = Date.now(), random = Math.random) {
  if (state.active) return state.active;
  const p = plan(state,words,now,random);
  const queue = shuffle([...p.fresh.map(w=>({wordId:w.id,kind:'new',attempt:0})),...p.review.map(w=>({wordId:w.id,kind:'review',attempt:0}))],random);
  if(!queue.length) return null;
  state.active = {id:`s_${now}_${Math.floor(random()*1e9)}`,startedAt:now,newCount:p.fresh.length,reviewCount:p.review.length,queue,index:0,current:null,responses:[]};
  return state.active;
}
function updateRecord(state,item,known,now) {
  const old=state.words[item.wordId];
  const r=old || {firstSeen:now,lastSeen:now,seen:0,correct:0,lapses:0,streak:0,due:afterDays(now,1),lastResult:false};
  r.lastSeen=now; r.seen++;
  if(known) r.correct++; else r.lapses++;
  if(item.kind!=='reinforce') {
    r.lastResult=known;
    r.streak=known?Math.min(5,r.streak+1):0;
    r.due=afterDays(now,known?DAY_INTERVALS[Math.max(0,r.streak-1)]:1);
  } else if(!known) {
    r.lastResult=false; r.streak=0; r.due=afterDays(now,1);
  }
  state.words[item.wordId]=r;
}
function answer(state,known,now=Date.now()) {
  const s=state.active;
  if(!s || s.current) return false;
  const item=s.queue[s.index];
  s.current={known,before:state.words[item.wordId]?clone(state.words[item.wordId]):null,answeredAt:now};
  updateRecord(state,item,known,now);
  s.responses.push({wordId:item.wordId,kind:item.kind,known,at:now});
  return true;
}
function correct(state) {
  const s=state.active;
  if(!s?.current?.known) return false;
  const item=s.queue[s.index], current=s.current;
  if(current.before) state.words[item.wordId]=clone(current.before); else delete state.words[item.wordId];
  current.known=false;
  updateRecord(state,item,false,current.answeredAt);
  s.responses[s.responses.length-1].known=false;
  return true;
}
function next(state,now=Date.now()) {
  const s=state.active;
  if(!s || !s.current) return null;
  const item=s.queue[s.index];
  if(!s.current.known && item.attempt<2) {
    s.queue.splice(Math.min(s.index+5,s.queue.length),0,{wordId:item.wordId,kind:'reinforce',attempt:item.attempt+1});
  }
  s.index++; s.current=null;
  if(s.index<s.queue.length) return null;
  const base=s.responses.filter(r=>r.kind!=='reinforce');
  const summary={id:s.id,startedAt:s.startedAt,finishedAt:now,newCount:s.newCount,reviewCount:s.reviewCount,correct:base.filter(r=>r.known).length,total:base.length,reinforced:s.responses.length-base.length,weakIds:[...new Set(s.responses.filter(r=>!r.known).map(r=>r.wordId))]};
  state.history.push(summary); state.active=null;
  return summary;
}
function stats(state,words,now=Date.now()) {
  const rs=Object.values(state.words),today=dateKey(now);
  return {total:words.length,learned:rs.length,unseen:words.length-rs.length,due:rs.filter(r=>r.due<=today).length,familiar:rs.filter(r=>r.streak>=3).length,weak:rs.filter(weak).length,sessions:state.history.length};
}
// 导入文件是外部输入：约束每个字段，防止残缺备份破坏学习队列。
function validate(input,words) {
  const ids=new Set(words.map(w=>w.id));
  const object=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
  const count=x=>Number.isInteger(x)&&x>=0&&x<=1000000;
  const time=x=>Number.isFinite(x)&&x>=0&&x<=8640000000000000;
  const date=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&Number.isFinite(Date.parse(x))&&new Date(x).toISOString().slice(0,10)===x;
  const assert=(ok,msg)=>{if(!ok)throw new Error(msg);};
  function record(r) {
    assert(object(r)&&time(r.firstSeen)&&time(r.lastSeen)&&r.lastSeen>=r.firstSeen&&count(r.seen)&&r.seen>0&&count(r.correct)&&count(r.lapses)&&r.correct+r.lapses===r.seen&&count(r.streak)&&r.streak<=5&&date(r.due)&&typeof r.lastResult==='boolean','单词记录不完整');
  }
  assert(object(input)&&input.version===1&&input.dataset===DATASET,'这不是本词库的有效备份');
  assert(object(input.words)&&time(input.updatedAt)&&Array.isArray(input.history)&&input.history.length<=100000,'备份结构不完整');
  for(const [id,r] of Object.entries(input.words)) {assert(ids.has(id),'备份含未知词条');record(r);}
  const sessionIds=new Set();
  for(const h of input.history) {
    assert(object(h)&&typeof h.id==='string'&&h.id.length<100&&!sessionIds.has(h.id)&&time(h.startedAt)&&time(h.finishedAt)&&h.finishedAt>=h.startedAt&&count(h.newCount)&&h.newCount<=15&&count(h.reviewCount)&&h.reviewCount<=45&&count(h.total)&&h.total===h.newCount+h.reviewCount&&count(h.correct)&&h.correct<=h.total&&count(h.reinforced)&&h.reinforced<=h.total*2&&Array.isArray(h.weakIds)&&h.weakIds.length<=h.total&&h.weakIds.every(id=>ids.has(id)),'学习历史不完整');
    sessionIds.add(h.id);
  }
  if(input.active!==null) {
    const s=input.active;
    assert(object(s)&&typeof s.id==='string'&&s.id.length<100&&!sessionIds.has(s.id)&&time(s.startedAt)&&count(s.newCount)&&s.newCount<=15&&count(s.reviewCount)&&s.reviewCount<=45&&s.newCount+s.reviewCount>0&&Array.isArray(s.queue)&&s.queue.length>0&&s.queue.length<=180&&count(s.index)&&s.index<s.queue.length,'当前任务不完整');
    const baseIds=new Set();
    for(const item of s.queue) {
      assert(object(item)&&ids.has(item.wordId)&&['new','review','reinforce'].includes(item.kind)&&count(item.attempt)&&item.attempt<=2&&(item.kind==='reinforce'?item.attempt>0:item.attempt===0),'词卡队列无效');
      if(item.kind!=='reinforce'){assert(!baseIds.has(item.wordId),'任务中有重复基础词卡');baseIds.add(item.wordId);}
    }
    assert(s.queue.filter(x=>x.kind==='new').length===s.newCount&&s.queue.filter(x=>x.kind==='review').length===s.reviewCount,'任务词数不匹配');
    assert(s.queue.every(x=>x.kind!=='reinforce'||baseIds.has(x.wordId)),'巩固词条缺少基础词卡');
    assert(Array.isArray(s.responses)&&s.responses.length===s.index+(s.current?1:0),'回答记录数量不匹配');
    s.responses.forEach((r,i)=>assert(object(r)&&r.wordId===s.queue[i].wordId&&r.kind===s.queue[i].kind&&typeof r.known==='boolean'&&time(r.at),'回答记录无效'));
    for(const r of s.responses)assert(input.words[r.wordId],'已答词条缺少学习记录');
    if(s.current!==null){
      assert(object(s.current)&&typeof s.current.known==='boolean'&&time(s.current.answeredAt)&&s.responses.at(-1).known===s.current.known&&s.responses.at(-1).at===s.current.answeredAt,'当前答案无效');
      if(s.current.before!==null)record(s.current.before);
    }
  }
  return clone(input);
}
const api={DATASET,DAY_INTERVALS,clone,dateKey,afterDays,empty,shuffle,weak,plan,start,answer,correct,next,stats,validate};
globalThis.WordEngine=api;
if(typeof module!=='undefined')module.exports=api;
})();
