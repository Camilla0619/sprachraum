let cardUrl;
async function exportCard(quote,language){
 const button=document.querySelector('#export');button.disabled=true;button.textContent='生成中…';
 try{
  await document.fonts.ready;
  const c=document.createElement('canvas');c.width=1200;c.height=1600;const x=c.getContext('2d');
  x.fillStyle='#e9e6de';x.fillRect(0,0,1200,1600);x.strokeStyle='#b5b6ac';x.strokeRect(60,60,1080,1480);
  x.fillStyle='#777c72';x.font='18px sans-serif';x.fillText('SPRACHRAUM / 言间',110,135);x.fillStyle='#282d29';x.font='48px serif';x.fillText('维特根斯坦',110,225);x.font='18px sans-serif';x.fillText('LUDWIG WITTGENSTEIN',110,270);
  x.fillStyle='#bd4e36';x.font='26px monospace';x.fillText('§ '+quote.id,110,380);
  const wrap=(text,size,width)=>{x.font=`${size}px ${language==='zh'?'serif':'Georgia, serif'}`;const tokens=language==='zh'?Array.from(text):text.split(/\s+/);let lines=[],line='';for(const t of tokens){const next=line+(line&&language!=='zh'?' ':'')+t;if(x.measureText(next).width>width&&line){lines.push(line);line=t}else line=next}if(line)lines.push(line);return lines};
  let size=language==='zh'?68:64,lines=wrap(quote[language],size,940);while(lines.length*size*1.6>680&&size>32){size-=2;lines=wrap(quote[language],size,940)}
  x.fillStyle='#282d29';x.font=`${size}px ${language==='zh'?'serif':'Georgia, serif'}`;const start=510+(680-lines.length*size*1.6)/2;lines.forEach((line,i)=>x.fillText(line,110,start+i*size*1.6));
  x.strokeStyle='#b5b6ac';x.beginPath();x.moveTo(110,1220);x.lineTo(1090,1220);x.stroke();
  x.fillStyle='#282d29';x.font='22px sans-serif';
  x.fillText('出处：《逻辑哲学论》 / Tractatus Logico-Philosophicus · § '+quote.id,110,1270);
  x.fillStyle='#777c72';x.font='20px sans-serif';
  const version={zh:'中文：本项目 AI 实验译文 · 未经专业审校',de:'Deutsch: Ludwig Wittgenstein · German text, 1922 edition',en:'English: C. K. Ogden, with F. P. Ramsey · 1922'};
  x.fillText(version[language],110,1310);
  x.font='18px sans-serif';
  x.fillText(language==='zh'?'依据德语原文试译、参考 Ogden 英译；非既有中文出版译本':'Text source: 1922 German–English edition · Project Gutenberg #5740',110,1348);
  if(language==='zh')x.fillText('德英底本：1922 年德英对照版 · Project Gutenberg #5740',110,1384);
  else x.fillText('Ludwig Wittgenstein · '+(language==='de'?'德语原文':'Ogden 英译'),110,1384);
  x.font='18px sans-serif';x.fillText('https://www.gutenberg.org/ebooks/5740',110,1420);
  x.font='16px sans-serif';x.fillText(quote.url,110,1452);
  x.fillStyle='#282d29';x.font='18px sans-serif';x.fillText('made by kaemi',110,1504);
  x.textAlign='right';x.fillText('Kaemi06@proton.me',1090,1504);x.textAlign='left';
  const blob=await new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(new Error('生成失败')),'image/png'));
  if(cardUrl)URL.revokeObjectURL(cardUrl);cardUrl=URL.createObjectURL(blob);const body=document.querySelector('#detailBody');body.replaceChildren();const h=document.createElement('h2');h.textContent='把这一句留下';body.append(h);const image=document.createElement('img');image.id='card-preview';image.alt='当前语录卡片预览';image.src=cardUrl;body.append(image);const actions=document.createElement('div');actions.className='card-actions';body.append(actions);const a=document.createElement('a');a.href=cardUrl;a.download=`wittgenstein-${quote.id}-${language}.png`;a.textContent='↓ 下载 PNG';actions.append(a);
  const file=new File([blob],a.download,{type:'image/png'});if(navigator.canShare?.({files:[file]})){const share=document.createElement('button');share.textContent='分享 / 保存图片';share.onclick=async()=>{try{await navigator.share({files:[file],title:'维特根斯坦 · 言间'})}catch(e){if(e.name!=='AbortError')toast('请使用下载 PNG，或长按图片保存')}};actions.append(share)}
  const p=document.createElement('p');p.className='meta';p.textContent='卡片按当前阅读语言生成，不包含你的私人笔记。手机也可尝试长按图片保存。';body.append(p);document.querySelector('#detail').showModal();a.click();
 }catch(e){toast('未能生成卡片，请重试')}finally{button.disabled=false;button.textContent='↓ 保存卡片'}
}
