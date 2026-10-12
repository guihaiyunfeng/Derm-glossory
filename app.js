(() => {
'use strict';
const E=WordEngine, WORDS=globalThis.WORDS, byId=new Map(WORDS.map(w=>[w.id,w]));
const KEY='fu-ci-dermatology-v1';
const app=document.querySelector('#app'),modal=document.querySelector('#modal');
let state,storageError='',corruptRaw='',route='home',summary=null,query='',filter='all',pageFilter='all',listPage=1,toastTimer;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icons={
 home:'<rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/>',
 book:'<path d="M12 5C9 3 5 3 3 4v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-2-1-6-1-9 1Zm0 0v15"/>',
 chart:'<path d="M4 20h17M7 16v-5m6 5V5m6 11V9"/>',
 settings:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3"/><circle cx="16" cy="17" r="3"/>',
 arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 back:'<path d="M20 12H4m6-6-6 6 6 6"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 cross:'<path d="m6 6 12 12M18 6 6 18"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 save:'<path d="M5 3h13l3 3v15H3V3h2Zm1 0v7h11V3M7 21v-7h10v7"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
 upload:'<path d="M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5"/>',
 leaf:'<path d="M19 4c-8-1-15 3-15 9 0 4 4 7 8 5 5-2 6-8 7-14ZM6 18l8-8"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
 flame:'<path d="M13 3c1 6 6 7 6 12a7 7 0 0 1-14 0c0-3 2-5 4-7 0 4 1 5 2 5 2-2 3-5 2-10Z"/>',
 flag:'<path d="M5 21V3m0 1c5-4 9 4 15 0v10c-6 4-10-4-15 0"/>'
};
const icon=(name,cls='')=>`<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.book}</svg>`;
const brand=`<span class="brand-mark">${icon('book')}</span><span><strong>肤词<span class="brand-dot">.</span></strong><small>DERMA WORDS</small></span>`;
function toast(text){const box=document.querySelector('#toast');box.textContent=text;box.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>box.classList.remove('show'),3500);}
function load(){
  storageError='';corruptRaw='';
  try {
    const raw=localStorage.getItem(KEY);
    if(raw){try{state=E.validate(JSON.parse(raw),WORDS);}catch(e){corruptRaw=raw;storageError='已有进度无法读取。请先导出原始记录，再导入有效备份恢复。';state=E.empty();}}
    else {state=E.empty();localStorage.setItem(KEY,JSON.stringify(state));}
  } catch(e){state=E.empty();storageError='浏览器未允许保存数据。请允许此网站使用本地存储后重新打开，学习操作暂不可用。';}
}
function commit(action){
  if(corruptRaw){toast('请先到「备份与设置」恢复已有记录');return false;}
  const draft=E.clone(state);let result;
  try{result=action(draft);draft.updatedAt=Date.now();localStorage.setItem(KEY,JSON.stringify(draft));state=draft;storageError='';return {result};}
  catch(e){storageError='本次操作未能保存，进度尚未更新。请检查浏览器存储，或先导出备份。';render();toast('保存失败，本次操作未记录');return false;}
}
function fmtDate(time,full=false){return new Date(time).toLocaleDateString('zh-CN',full?{year:'numeric',month:'long',day:'numeric'}:{month:'numeric',day:'numeric'});}
function countToday(){const today=E.dateKey();return state.history.filter(h=>E.dateKey(h.finishedAt)===today).reduce((n,h)=>n+h.total,0)+(state.active?.responses.filter(r=>r.kind!=='reinforce'&&E.dateKey(r.at)===today).length||0);}
function weekData(){return Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);const key=E.dateKey(d.getTime());const done=state.history.filter(h=>E.dateKey(h.finishedAt)===key).reduce((n,h)=>n+h.total,0);const active=state.active?.responses.filter(r=>r.kind!=='reinforce'&&E.dateKey(r.at)===key).length||0;return {key,label:`${d.getMonth()+1}/${d.getDate()}`,value:done+active};});}
function status(w){const r=state.words[w.id];return !r?['未学习','new']:r.due<=E.dateKey()?['待复习','due']:E.weak(r)?['需巩固','weak']:r.streak>=3?['已熟悉','familiar']:['学习中','learning'];}
function shell(content){
  const navs=[['home','home','学习概览'],['library','book','我的词库'],['stats','chart','学习记录'],['settings','settings','备份与设置']];
  const current=route==='learn'||route==='result'?'home':route;
  app.innerHTML=`<aside class="sidebar"><a href="#home" class="brand" aria-label="肤词首页">${brand}</a><div class="sidebar-label">我的学习空间</div><nav aria-label="主导航">${navs.map(([r,i,label])=>`<button class="nav-item ${current===r?'active':''}" data-route="${r}" ${current===r?'aria-current="page"':''}>${icon(i)}<span>${label}</span>${current===r?'<i></i>':''}</button>`).join('')}</nav><div class="sidebar-bottom"><div class="private-label">${icon('shield')}<span>一个人的学习角落</span></div><p>不赶进度，慢慢记牢。<br>每一次回忆，都算数。</p><span class="sidebar-footer">皮肤科英语 · 个人词库</span></div></aside><main class="main ${route==='learn'?'focus-main':''}"><header class="topbar"><div class="mobile-brand">${brand}</div><span class="breadcrumb">我的学习空间 <span>/</span> ${esc(navs.find(x=>x[0]===current)?.[2]||'学习概览')}</span><span class="save-indicator ${storageError?'error':''}" title="进度存储在当前浏览器">${icon(storageError?'flag':'check')}<span>${storageError?'保存需要处理':'本地自动保存'}</span></span></header>${storageError?`<div class="storage-alert" role="alert">${esc(storageError)} <button data-route="settings">查看备份与设置</button></div>`:''}<div class="page-content">${content}</div><footer class="main-footer"><span>肤词 · 把专业词汇，变成自己的语言。</span><span>原书索引 399—404 页</span></footer></main><nav class="mobile-nav" aria-label="移动端导航">${navs.map(([r,i,label])=>`<button data-route="${r}" class="${current===r?'active':''}" ${current===r?'aria-current="page"':''}>${icon(i)}<span>${r==='home'?'学习':r==='library'?'词库':r==='stats'?'记录':'备份'}</span></button>`).join('')}</nav>`;
}
function heading(eyebrow,title,desc,right=''){return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${desc}</p></div>${right}</div>`;}
function metric(value,label,detail,i){return `<div class="metric"><span class="metric-icon">${icon(i)}</span><div><span class="metric-label">${label}</span><strong>${value}<small>词</small></strong><span class="metric-detail">${detail}</span></div></div>`;}
function home(){
  const st=E.stats(state,WORDS),p=E.plan(state,WORDS),s=state.active;
  const fresh=s?s.newCount:p.fresh.length,review=s?s.reviewCount:p.review.length;
  const baseDone=s?s.responses.filter(r=>r.kind!=='reinforce').length:0;
  const percent=Math.round(st.learned/st.total*100);
  const week=weekData(),max=Math.max(15,...week.map(w=>w.value));
  const last=state.history.at(-1);
  shell(`${heading('A LITTLE EVERY TIME','把专业词汇，记得更牢。','从一次认真回忆开始，让陌生的单词慢慢熟悉。',`<span class="date-label">${fmtDate(Date.now(),true)}</span>`)}
  <section class="metrics" aria-label="词库进度">${metric(st.total,'词库总量','来自你的 6 页词表','book')}${metric(st.learned,'累计已学',`${st.unseen} 个词等待初次见面`,'leaf')}${metric(st.due,'到期复习',st.due?'温习一下，记忆会更清晰':'当前没有到期词','clock')}</section>
  <section class="study-grid"><div class="hero"><div class="hero-copy"><div class="hero-tag"><span></span>${s?'接着上次，继续向前':'留一点时间，给记忆'}</div><h2>${s?'记忆的旅程，\n从这里继续。':'每次一点，\n专业再近一点。'}</h2><p>${s?`本轮已完成 ${baseDone} / ${s.newCount+s.reviewCount} 个基础词条`:'先回忆，再揭晓。\n用自己的节奏，积累专业词汇。'}</p><button class="btn hero-btn" data-action="start" ${storageError?'disabled':''}>${s?'继续上次学习':'开始本轮学习'}${icon('arrow')}</button><span class="hero-caption">${s?'中途退出也没关系，进度已为你保留':'顺序随机 · 自动记录 · 无需例句'}</span></div><div class="book-art" aria-hidden="true"><div class="art-orbit"></div><div class="art-spark spark-one">✳</div><div class="art-spark spark-two">+</div><div class="art-book back-book"></div><div class="art-book front-book"><span class="book-line"></span><span class="book-title">DERMA<br>WORDS</span><span class="book-leaf">${icon('leaf')}</span><span class="book-subtitle">one word at a time</span></div><span class="art-float">epidermis</span></div></div>
  <div class="panel plan-panel"><div class="panel-eyebrow">${s?'本轮学习安排':'准备好下一次见面'}</div><h2>${s?'正在进行':'本轮计划'}<span class="soft-badge">随机排列</span></h2><div class="plan-number"><span><i class="dot new-dot"></i>新词学习</span><strong>${fresh}<small>/ 15</small></strong></div><div class="plan-number"><span><i class="dot review-dot"></i>复习巩固</span><strong>${review}<small>/ 45</small></strong></div><div class="plan-divider"></div><p class="plan-note">${st.learned===0?'初次见面，先学 15 个新词。已有学习记录后，会逐步加入复习词。':review<45?`当前可复习 ${review} 个词，按实际数量安排，不重复凑数。`:st.due>=45?'优先安排到期复习词，再混合新词随机展示。':'优先安排到期词，不足时补充薄弱或较久未复习的已学词。'}</p><div class="plan-foot">${icon('clock')}不认识的词，本轮稍后再见</div></div></section>
  <section class="lower-grid"><div class="panel progress-panel"><div class="panel-heading"><h2>词库熟悉度</h2><button class="text-btn" data-route="library">查看词库 ${icon('arrow')}</button></div><div class="progress-body"><div class="progress-ring" style="--p:${percent}" role="img" aria-label="已学 ${percent}%"><div><strong>${percent}<small>%</small></strong><span>已学占比</span></div></div><div class="progress-legend"><div><span><i class="dot new-dot"></i>已学词条</span><strong>${st.learned}</strong></div><div><span><i class="dot pale-dot"></i>尚未学习</span><strong>${st.unseen}</strong></div><p>其中 ${st.familiar} 个词已连续认识至少 3 次。</p></div></div></div><div class="panel activity-panel"><div class="panel-heading"><h2>最近 7 天</h2><span class="muted">今天已回忆 <strong>${countToday()}</strong> 词</span></div><div class="week-bars">${week.map((w,i)=>`<div class="week-column ${i===6?'today':''}" title="${w.key}：${w.value} 个词"><span>${w.value||'·'}</span><div class="bar-track"><i style="height:${w.value?Math.max(5,w.value/max*100):3}%"></i></div><small>${i===6?'今天':w.label}</small></div>`).join('')}</div><p class="activity-note">${last?`上次完成：${fmtDate(last.finishedAt)} · ${last.total} 个词条`:'第一轮学习完成后，这里会留下你的足迹。'}</p></div></section>`);
}
function learn(){
  const s=state.active;if(!s){route='home';home();return;}
  const item=s.queue[s.index],w=byId.get(item.wordId),r=s.current;
  const done=s.responses.filter(x=>x.kind!=='reinforce').length;
  const progress=Math.round(done/(s.newCount+s.reviewCount)*100);
  const remaining=s.queue.length-s.index-(r?1:0);
  shell(`<div class="focus-top"><button class="text-btn" data-route="home">${icon('back')}返回概览</button><span class="focus-top-note">${icon('save')}随时离开，下次继续</span></div><div class="session-header"><div><div class="eyebrow">ONE WORD AT A TIME</div><h1>认真回忆，就有收获。</h1></div><div class="session-fraction"><strong>${done}</strong><span>/ ${s.newCount+s.reviewCount}</span><small>基础词条</small></div></div><div class="session-progress" role="progressbar" aria-label="基础词条进度" aria-valuenow="${done}" aria-valuemin="0" aria-valuemax="${s.newCount+s.reviewCount}"><i style="width:${progress}%"></i></div><div class="session-meta"><span><i class="dot new-dot"></i>新词 ${s.responses.filter(x=>x.kind==='new').length}/${s.newCount}</span><span><i class="dot review-dot"></i>复习 ${s.responses.filter(x=>x.kind==='review').length}/${s.reviewCount}</span><span class="meta-right">还有 ${remaining} 次回忆${s.queue.length>s.newCount+s.reviewCount?'（含巩固）':''}</span></div>
  <section class="word-card ${r?'revealed':''}" aria-label="单词卡片"><div class="word-card-top"><span class="word-kind ${item.kind==='reinforce'?'reinforce':''}">${item.kind==='new'?'初次见面':item.kind==='review'?'温故知新':`再回忆一次 · ${item.attempt}/2`}</span><span class="word-counter">第 ${s.index+1} 张</span></div><div class="word-content"><div class="word-label">${r?'ANSWER REVEALED':'TAKE A MOMENT TO RECALL'}</div><h2 class="english-word ${w.en.length>60?'long-word':''}" lang="en">${esc(w.en)}</h2>${r?`<div class="meaning" aria-live="polite"><div class="meaning-divider"></div><h3>${esc(w.zh)}</h3>${w.abbr?`<span class="abbr">缩写 ${esc(w.abbr)}</span>`:''}<span class="word-source">原书索引 · 第 ${w.page} 页</span>${w.note?`<p class="source-note">${icon('flag')}${esc(w.note)}</p>`:''}</div>`:'<p class="recall-hint">先在心里想一想，它是什么意思？</p>'}</div><div class="word-card-bottom">${r?`<span class="answer-feedback ${r.known?'known':'unknown'}">${icon(r.known?'check':'leaf')}${r.known?'这一次，你记住了':'没关系，稍后再巩固'}</span>${r.known?'<button class="text-btn correction" data-action="correct">其实没记住</button>':'<span class="feedback-tip">下次将更早安排复习</span>'}`:`<span>${icon('leaf')}先回忆，后看释义</span><span>相信自己的第一反应</span>`}</div></section>
  <div class="answer-actions">${r?`<button class="btn primary next-btn" data-action="next">${remaining?'下一个词':'查看本轮结果'}${icon('arrow')}</button>`:`<button class="btn unknown-btn" data-action="unknown">${icon('cross')}不认识<kbd>1</kbd></button><button class="btn primary known-btn" data-action="known">${icon('check')}我认识<kbd>2</kbd></button>`}</div><p class="keyboard-hint">${r?'按空格键，继续下一张词卡':'键盘快捷键：1 不认识　·　2 我认识'}</p>`);
}
function result(){
  const s=summary||state.history.at(-1);if(!s){route='home';home();return;}
  const missed=s.weakIds.map(id=>byId.get(id));
  shell(`<div class="result-wrap"><span class="result-icon">${icon('check')}</span><div class="eyebrow">A LITTLE MORE FAMILIAR</div><h1>又向前走了一小步。</h1><p>本轮已完成。每一次认真回忆，都在加深记忆。</p><div class="result-metrics"><div><strong>${s.newCount}</strong><span>新词学习</span></div><div><strong>${s.reviewCount}</strong><span>复习词条</span></div><div><strong>${s.total?Math.round(s.correct/s.total*100):0}<small>%</small></strong><span>首次回忆认识率</span></div></div><p class="result-note">额外巩固 ${s.reinforced} 次 · 进度已自动保存</p><div class="result-buttons"><button class="btn secondary" data-route="home">返回概览</button><button class="btn primary" data-action="start">再学一轮${icon('arrow')}</button></div>${missed.length?`<div class="panel missed-panel"><h2>这些词，再给它们一点时间 <span>${missed.length}</span></h2><p>即使本轮已再次认出，也会安排较早复习。</p><div class="missed-list">${missed.map(w=>`<button class="missed-word" data-word="${w.id}"><span lang="en">${esc(w.en)}</span><span>${esc(w.zh)}</span></button>`).join('')}</div></div>`:'<div class="all-known">这一轮的词都认识，下一轮继续保持。</div>'}</div>`);
}
function filteredWords(){
  const q=query.trim().toLocaleLowerCase();
  return WORDS.filter(w=>{
    const r=state.words[w.id];
    return (!q||`${w.en} ${w.zh} ${w.abbr}`.toLocaleLowerCase().includes(q))&&(pageFilter==='all'||w.page===Number(pageFilter))&&(filter==='all'||(filter==='new'&&!r)||(filter==='learned'&&r)||(filter==='due'&&r&&r.due<=E.dateKey())||(filter==='weak'&&E.weak(r))||(filter==='noted'&&w.note));
  });
}
function library(){
  shell(`${heading('YOUR PERSONAL COLLECTION','我的词库','每一个专业词汇，都有自己的位置。')}<section class="panel library-panel"><div class="library-tools"><label class="search-box">${icon('search')}<input id="word-search" type="search" placeholder="搜索英文、中文或缩写…" value="${esc(query)}" aria-label="搜索词库"></label><label class="page-select"><span class="sr-only">来源页码</span><select id="page-filter"><option value="all">全部来源页</option>${[399,400,401,402,403,404].map(p=>`<option value="${p}" ${String(p)===pageFilter?'selected':''}>第 ${p} 页</option>`).join('')}</select></label></div><div class="filter-row" role="group" aria-label="学习状态筛选">${[['all','全部词条'],['new','未学习'],['learned','已学习'],['due','待复习'],['weak','需巩固'],['noted','录入提示']].map(([key,label])=>`<button data-filter="${key}" class="filter-btn ${key===filter?'active':''}" aria-pressed="${key===filter}">${label}</button>`).join('')}</div><div id="word-results"></div></section>`);
  renderWordResults();
}
function renderWordResults(){
  const all=filteredWords(),pageSize=30,pages=Math.max(1,Math.ceil(all.length/pageSize));listPage=Math.max(1,Math.min(listPage,pages));
  document.querySelector('#word-results').innerHTML=`<div class="results-count">共 ${all.length} 个词条 <span>点击词条查看学习详情</span></div><div class="word-table"><div class="table-head"><span>英文术语 / 缩写</span><span>中文释义</span><span>学习状态</span></div>${all.slice((listPage-1)*pageSize,listPage*pageSize).map(w=>{const [label,cls]=status(w);return `<button class="word-row" data-word="${w.id}"><span class="table-english" lang="en">${esc(w.en)}${w.abbr?`<small>${esc(w.abbr)}</small>`:''}</span><span class="table-meaning">${esc(w.zh)}${w.note?'<i class="note-dot" title="含录入核对提示"></i>':''}</span><span class="status-badge ${cls}">${label}</span></button>`;}).join('')||`<div class="empty-state">${icon('search')}<h3>没有找到匹配的词条</h3><p>试试其他关键词，或切换筛选条件。</p><button class="text-btn" data-action="clear-search">清除筛选</button></div>`}</div><div class="pagination"><span>第 ${listPage} / ${pages} 页</span><div><button class="btn small secondary" data-action="prev-page" ${listPage===1?'disabled':''}>上一页</button><button class="btn small secondary" data-action="next-page" ${listPage===pages?'disabled':''}>下一页</button></div></div>`;
}
function stats(){
  const st=E.stats(state,WORDS),history=[...state.history].reverse();
  const total=history.reduce((n,h)=>n+h.total,0),correct=history.reduce((n,h)=>n+h.correct,0);
  const days=new Set(history.map(h=>E.dateKey(h.finishedAt)));
  shell(`${heading('EVERY RECALL COUNTS','学习留下的痕迹','不必一次记住全部，每次回来都有收获。')}<section class="stats-overview"><div class="panel stat-tile"><span>${icon('flag')}完成轮次</span><strong>${history.length}<small>轮</small></strong></div><div class="panel stat-tile"><span>${icon('flame')}学习天数</span><strong>${days.size}<small>天</small></strong></div><div class="panel stat-tile"><span>${icon('check')}首次回忆认识率</span><strong>${total?Math.round(correct/total*100):'—'}<small>${total?'%':''}</small></strong></div><div class="panel stat-tile"><span>${icon('leaf')}需要巩固</span><strong>${st.weak}<small>词</small></strong></div></section><section class="panel history-panel"><div class="panel-heading"><h2>学习记录</h2><span class="muted">不含本轮额外巩固的认识率</span></div>${state.active?`<div class="in-progress"><span class="live-dot"></span><div><strong>有一轮学习正在进行</strong><p>已回忆 ${state.active.responses.filter(r=>r.kind!=='reinforce').length} / ${state.active.newCount+state.active.reviewCount} 个基础词条</p></div><button class="btn secondary small" data-action="start">继续学习</button></div>`:''}${history.length?history.slice(0,100).map(h=>`<button class="history-row" data-history="${esc(h.id)}"><span class="history-icon">${icon('check')}</span><div class="history-date"><strong>${fmtDate(h.finishedAt,true)}</strong><span>${new Date(h.finishedAt).toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'})} 完成 · 额外巩固 ${h.reinforced} 次</span></div><div class="history-count"><strong>${h.newCount} 新词 <i>·</i> ${h.reviewCount} 复习</strong><span>首次回忆认识率 ${Math.round(h.correct/h.total*100)}%</span></div>${icon('arrow')}</button>`).join(''):`<div class="empty-state">${icon('leaf')}<h3>你的第一份学习记录，正在路上。</h3><p>完成一轮后，日期、词数和认识率会自动记录在这里。</p><button class="btn primary" data-action="start">${state.active?'继续学习':'开始第一轮'}${icon('arrow')}</button></div>`}</section><p class="section-footnote">“已熟悉”表示连续至少 3 次基础回忆选择了“我认识”；巩固回答不会延长复习间隔。</p>`);
}
function settings(){
  const st=E.stats(state,WORDS);
  shell(`${heading('KEEP YOUR MEMORIES SAFE','备份与设置','属于你的词库，和属于你的学习节奏。')}<section class="panel privacy-panel"><span class="privacy-icon">${icon('shield')}</span><div><h2>只在当前浏览器，安静地保存。</h2><p>每次回答后立即记录，无需账号，不进行跨设备同步。请使用同一浏览器打开同一网址继续学习。</p><div class="privacy-tags"><span>${icon('check')}单人使用</span><span>${icon('check')}无学习数据上传</span><span>${icon('check')}断点续背</span></div></div></section><div class="settings-grid"><section class="panel backup-panel"><div class="panel-heading"><h2>进度备份</h2>${icon('save')}</div><p>清除网站数据、更换浏览器或使用隐私模式，可能让本地进度消失。定期导出一份备份，就能安心继续。</p><div class="backup-snapshot"><div><span>已学词条</span><strong>${st.learned}</strong></div><div><span>已完成轮次</span><strong>${st.sessions}</strong></div><div><span>本轮进度</span><strong>${state.active?`${state.active.responses.filter(r=>r.kind!=='reinforce').length}/${state.active.newCount+state.active.reviewCount}`:'无进行中任务'}</strong></div></div><div class="backup-actions"><button class="btn primary" data-action="export">${icon('download')}导出进度备份</button><button class="btn secondary" data-action="import">${icon('upload')}导入备份</button></div><p class="fine-print">备份包含单词状态、当前任务与学习历史。导入前会再次确认。</p>${corruptRaw?'<button class="btn secondary" data-action="export-raw">导出无法读取的原始记录</button>':''}</section><section class="panel rules-panel"><h2>学习规则</h2><div class="rule"><span>01</span><div><h3>每轮 15 个新词 + 45 个复习词</h3><p>数量不足时按实际词数安排，新词和复习词混合随机展示。</p></div></div><div class="rule"><span>02</span><div><h3>认识得越稳定，间隔越长</h3><p>连续认识后，依次安排在 1、3、7、14、30 天后复习。不认识则回到较短间隔。</p></div></div><div class="rule"><span>03</span><div><h3>没记住的词，本轮再见</h3><p>隔几张卡片再次回忆，每个词最多额外巩固 2 次。仍未记住的词留待后续复习。</p></div></div></section></div><section class="panel source-panel"><div><div class="panel-eyebrow">YOUR SOURCE MATERIAL</div><h2>来自你的 6 页皮肤科词表</h2><p>${WORDS.length} 个词条 · 原书索引第 399—404 页 · 含跨页合并、缩写与录入核对提示</p></div><button class="btn secondary" data-action="export-words">${icon('download')}导出词库 CSV</button></section><div class="reset-area"><div><strong>重新开始学习</strong><p>清除当前浏览器中的学习进度，保留完整词库。</p></div><button class="text-btn danger" data-action="reset">清除学习记录</button></div>`);
}
function render(){({home,learn,result,library,stats,settings}[route]||home)();}
function go(to){route=to;render();window.scrollTo({top:0,behavior:'instant'});}
function openDialog(content){modal.innerHTML=`<div class="dialog-content">${content}</div>`;modal.showModal();}
function closeDialog(){modal.close();}
function wordDetail(id){
  const w=byId.get(id);if(!w)return;const r=state.words[id],[label,cls]=status(w);
  openDialog(`<div class="dialog-heading"><span class="eyebrow">WORD DETAIL</span><button class="icon-btn" data-action="close-dialog" aria-label="关闭">${icon('cross')}</button></div><h2 id="modal-title" class="detail-en" lang="en">${esc(w.en)}</h2><h3 class="detail-zh">${esc(w.zh)}</h3>${w.abbr?`<span class="abbr">缩写 ${esc(w.abbr)}</span>`:''}<div class="detail-source"><span>原书索引 · 第 ${w.page} 页</span><span class="status-badge ${cls}">${label}</span></div>${w.note?`<p class="source-note">${esc(w.note)}</p>`:''}${r?`<div class="detail-grid"><div><span>回忆次数（含巩固）</span><strong>${r.seen}</strong></div><div><span>未认出次数</span><strong>${r.lapses}</strong></div><div><span>连续认识（基础词卡）</span><strong>${r.streak}</strong></div><div><span>下次复习</span><strong>${r.due}</strong></div></div><p class="fine-print">最近学习：${fmtDate(r.lastSeen,true)}</p>`:'<p class="detail-empty">还没有学习记录，未来会在新词任务中随机遇见。</p>'}<button class="btn primary dialog-full" data-action="close-dialog">知道了</button>`);
}
function download(data,name,type='application/json'){const blob=new Blob([data],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function exportBackup(){if(corruptRaw){download(corruptRaw,`肤词-原始记录-${E.dateKey()}.json`);return;}download(JSON.stringify(state,null,2),`肤词-进度备份-${E.dateKey()}.json`);toast('备份已导出，请妥善保存');}
function start(){if(commit(d=>E.start(d,WORDS))){summary=null;go('learn');}}
const actions={
 start,
 known:()=>{if(commit(d=>E.answer(d,true))){render();document.querySelector('[data-action="next"]')?.focus({preventScroll:true});}},
 unknown:()=>{if(commit(d=>E.answer(d,false))){render();document.querySelector('[data-action="next"]')?.focus({preventScroll:true});}},
 correct:()=>{if(commit(d=>E.correct(d))){render();toast('已改为“不认识”，稍后再巩固');}},
 next:()=>{const out=commit(d=>E.next(d));if(out){if(out.result){summary=out.result;go('result');}else render();}},
 export:exportBackup,
 import:()=>{document.querySelector('#import-file').value='';document.querySelector('#import-file').click();},
 'export-raw':()=>download(corruptRaw,`肤词-原始记录-${E.dateKey()}.json`),
 'export-words':()=>{const cell=s=>`"${String(s).replace(/"/g,'""')}"`;download('\ufeff'+[['中文','英文','缩写','来源页','核对说明'],...WORDS.map(w=>[w.zh,w.en,w.abbr,w.page,w.note])].map(row=>row.map(cell).join(',')).join('\r\n'),'肤词-完整词库.csv','text/csv;charset=utf-8');},
 'close-dialog':closeDialog,
 'clear-search':()=>{query='';filter='all';pageFilter='all';listPage=1;library();},
 'prev-page':()=>{listPage--;renderWordResults();document.querySelector('.library-panel').scrollIntoView({block:'start',behavior:'smooth'});},
 'next-page':()=>{listPage++;renderWordResults();document.querySelector('.library-panel').scrollIntoView({block:'start',behavior:'smooth'});},
 reset:()=>openDialog(`<div class="dialog-heading"><span class="eyebrow">START AGAIN</span><button class="icon-btn" data-action="close-dialog" aria-label="关闭">${icon('cross')}</button></div><h2 id="modal-title">确定清除学习记录？</h2><p>将删除本浏览器的单词进度、当前任务和全部学习历史。完整词库会保留。</p><button class="btn secondary dialog-full" data-action="export">先导出备份</button><div class="dialog-buttons"><button class="btn secondary" data-action="close-dialog">保留记录</button><button class="btn danger-btn" data-action="confirm-reset">确定清除</button></div>`),
 'confirm-reset':()=>{try{const blank=E.empty();localStorage.setItem(KEY,JSON.stringify(blank));state=blank;corruptRaw='';storageError='';closeDialog();go('home');toast('学习记录已清除');}catch(e){toast('清除失败，请检查浏览器存储');}}
};
document.addEventListener('click',event=>{
  const target=event.target.closest('button, a.brand');if(!target||target.disabled)return;
  if(target.matches('a.brand')){event.preventDefault();go('home');return;}
  if(target.dataset.route){go(target.dataset.route);return;}
  if(target.dataset.action){actions[target.dataset.action]?.();return;}
  if(target.dataset.word){wordDetail(target.dataset.word);return;}
  if(target.dataset.history){summary=state.history.find(h=>h.id===target.dataset.history);go('result');return;}
  if(target.dataset.filter){filter=target.dataset.filter;listPage=1;library();}
});
document.addEventListener('input',event=>{if(event.target.id==='word-search'){query=event.target.value;listPage=1;renderWordResults();}});
document.addEventListener('change',event=>{if(event.target.id==='page-filter'){pageFilter=event.target.value;listPage=1;renderWordResults();}});
document.addEventListener('keydown',event=>{
  if(route!=='learn'||modal.open||event.repeat||event.ctrlKey||event.metaKey||event.altKey||['INPUT','TEXTAREA','SELECT'].includes(event.target.tagName))return;
  if(!state.active?.current && ['1','2'].includes(event.key)){event.preventDefault();actions[event.key==='1'?'unknown':'known']();}
  else if(state.active?.current&&event.code==='Space'){event.preventDefault();actions.next();}
});
modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDialog();}});
document.querySelector('#import-file').addEventListener('change',async event=>{
  const file=event.target.files?.[0];if(!file)return;
  try{
    if(file.size>8*1024*1024)throw new Error('备份文件超过 8 MB');
    const incoming=E.validate(JSON.parse(await file.text()),WORDS),st=E.stats(incoming,WORDS);
    openDialog(`<div class="dialog-heading"><span class="eyebrow">RESTORE YOUR PROGRESS</span><button class="icon-btn" data-action="close-dialog" aria-label="关闭">${icon('cross')}</button></div><h2 id="modal-title">恢复这份学习进度？</h2><p>备份包含 ${st.learned} 个已学词、${st.sessions} 轮已完成学习${incoming.active?'，以及一轮进行中的任务':''}。</p><p class="import-warning">导入会替换当前进度。建议先导出当前备份。</p><button class="btn secondary dialog-full" data-action="export">先导出当前备份</button><div class="dialog-buttons"><button class="btn secondary" data-action="close-dialog">取消</button><button class="btn primary" id="confirm-import">确定恢复</button></div>`);
    document.querySelector('#confirm-import').onclick=()=>{
      try{incoming.updatedAt=Date.now();localStorage.setItem(KEY,JSON.stringify(incoming));state=incoming;corruptRaw='';storageError='';closeDialog();go('home');toast('备份已恢复，可以继续学习');}catch(e){toast('恢复未能保存，当前记录未改动');}
    };
  }catch(e){toast(`导入失败：${e.message==='Unexpected end of JSON input'?'文件不完整':e.message.includes('JSON')?'文件格式不正确':e.message}`);}
});
window.addEventListener('storage',event=>{if(event.key!==KEY)return;load();summary=null;render();toast('已同步当前浏览器另一标签页的进度');});
window.addEventListener('pageshow',event=>{if(event.persisted){load();render();}});
load();render();
})();
