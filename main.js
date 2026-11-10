(function(){
var ARROW='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
var SERVICES=[
 {t:'UI / UX Design',s:'Interfaces people understand at a glance.',d:'We research your audience, sketch the structure, then design every screen and state so the site feels obvious to use.',l:['User flows and wireframes','Clickable prototypes','Design system with colours, type and components','Mobile-first layouts'],g:['Figma','Prototyping','Design systems'],i:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/>'},
 {t:'Web Development',s:'Fast, clean sites that are easy to maintain.',d:'Hand-built front ends and back ends with clean code, solid structure and a content system your team can use.',l:['Custom front-end builds','CMS and content editing','APIs and integrations','Hosting and launch support'],g:['HTML / CSS / JS','React','Node.js'],i:'<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>'},
 {t:'Motion & Animation',s:'Movement that guides, delights and sells.',d:'Scroll stories, hover effects, page transitions and interactive moments, tuned to feel smooth on every device.',l:['Scroll-driven storytelling','Micro-interactions','Page transitions','Canvas and WebGL visuals'],g:['GSAP','Canvas','WebGL'],i:'<circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4z"/>'},
 {t:'E-commerce',s:'Stores designed to turn visitors into buyers.',d:'Product pages, carts and checkout flows that are quick, trustworthy and easy to manage after launch.',l:['Product and collection pages','Checkout and payments','Inventory and order setup','Conversion-focused design'],g:['Shopify','WooCommerce','Stripe'],i:'<path d="M5 7h15l-1.5 9H7zM5 7L4 3H2M9 20a1 1 0 100-2 1 1 0 000 2zM17 20a1 1 0 100-2 1 1 0 000 2z"/>'},
 {t:'Brand & Identity',s:'A look that carries across every screen.',d:'Logo, colour, typography and tone, packaged into a simple guide so your brand looks consistent everywhere.',l:['Logo and mark','Colour and type system','Brand guidelines','Social and print assets'],g:['Logo','Guidelines','Assets'],i:'<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6L12 16.4 6.6 19.4l1.3-6L3.4 9.3l6-.7z"/>'},
 {t:'Performance & SEO',s:'Be fast, be found, be accessible.',d:'We tune loading speed, structure content for search engines and check accessibility so everyone can use your site.',l:['Speed and Core Web Vitals','On-page SEO basics','Accessibility checks','Analytics setup'],g:['Core Web Vitals','SEO','Accessibility'],i:'<path d="M4 19V9M10 19V5M16 19v-8M22 19H2"/>'}
];
var WORKS=[
 {n:'Lanka Brew',d:'Online store for a specialty coffee roaster.',c:'E-commerce',th:'t-yellow',sh:'sh-circle'},
 {n:'Northline Freight',d:'Shipment tracking and quote site for a logistics firm.',c:'Web',th:'t-dark',sh:'sh-bars'},
 {n:'Aurelia Dental',d:'Clinic website with simple online booking.',c:'Web',th:'t-light',sh:'sh-ring'},
 {n:'Pulse Fitness',d:'Membership landing page with scroll animation.',c:'Web',th:'t-dark',sh:'sh-tri'},
 {n:'Kade Studio',d:'Portfolio and identity for an architecture studio.',c:'Brand',th:'t-paper',sh:'sh-sq'},
 {n:'Orbit Pay',d:'Product site for a payments startup.',c:'E-commerce',th:'t-light',sh:'sh-wave'}
];
var STEPS=[
 {t:'Discover',p:'We learn your business, your customers and your goals. Then we agree on scope, pages and a timeline.',o:'Project brief and plan'},
 {t:'Design',p:'Wireframes first, then full visual design in your colours and type. You review and comment before we move on.',o:'Clickable prototype'},
 {t:'Animate',p:'We add motion where it helps: transitions, hover states and scroll stories. Each one is tested for smoothness.',o:'Motion guide and demos'},
 {t:'Build',p:'We turn the design into fast, accessible code, connect the content system and test on real devices.',o:'Working staging site'},
 {t:'Launch & grow',p:'We go live, check speed and search basics, and stay close for fixes and improvements after launch.',o:'Live site and handover'}
];

function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}

/* render cards */
function svc(i){return '<svg viewBox="0 0 24 24">'+SERVICES[i].i+'</svg>'}
$('#homeCards').innerHTML=[0,1,2].map(function(i){var s=SERVICES[i];return '<a class="card rv" href="#services"><div class="ic">'+svc(i)+'</div><h3>'+s.t.replace('&','&amp;')+'</h3><p>'+s.s+' '+s.d+'</p><span class="go">Learn more '+ARROW+'</span></a>'}).join('');

function workCard(w){return '<article class="work rv" data-c="'+w.c+'"><div class="shot '+w.th+'"><div class="mock"><div class="bar"><i></i><i></i><i></i><u></u></div><div class="body"><div class="tx"><s></s><s></s><s></s><s></s><em></em></div><div class="art '+w.sh+'"><span class="a1"><b></b><b></b><b></b><b></b></span><span class="a2"></span><span class="a3"></span></div></div></div></div><div class="meta"><div><h3>'+w.n+'</h3><p>'+w.d+'</p></div><span class="tag">'+w.c+'</span></div></article>'}
$('#homeWorks').innerHTML=WORKS.slice(0,3).map(workCard).join('');
$('#allWorks').innerHTML=WORKS.map(workCard).join('');
var cats=['All','Web','E-commerce','Brand'];
$('#filters').innerHTML=cats.map(function(c,i){return '<button class="fchip'+(i?'':' on')+'" data-f="'+c+'" aria-pressed="'+(i?'false':'true')+'">'+c+'</button>'}).join('');
$('#filters').addEventListener('click',function(e){
  var b=e.target.closest('.fchip');if(!b)return;
  $$('.fchip').forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});
  var f=b.dataset.f;
  $$('#allWorks .work').forEach(function(w){var show=f==='All'||w.dataset.c===f;w.style.display=show?'':'none'});
});

/* accordion */
$('#acc').innerHTML=SERVICES.map(function(s,i){
  return '<div class="it'+(i===0?' open':'')+'"><button aria-expanded="'+(i===0)+'" aria-controls="p'+i+'"><span class="n">0'+(i+1)+'</span><h3>'+s.t.replace('&','&amp;')+'</h3><span class="pl"></span></button><div class="panel" id="p'+i+'"><div><div class="inner"><p>'+s.d+'</p><ul>'+s.l.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><div class="tags">'+s.g.map(function(x){return '<span>'+x+'</span>'}).join('')+'</div></div></div></div></div>'}).join('');
$('#acc').addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  var it=b.parentNode,open=!it.classList.contains('open');
  $$('.it',$('#acc')).forEach(function(x){x.classList.remove('open');$('button',x).setAttribute('aria-expanded','false')});
  if(open){it.classList.add('open');b.setAttribute('aria-expanded','true')}
});

/* timeline */
$('#tl').innerHTML=STEPS.map(function(s,i){return '<div class="step'+(i===0?' lit':'')+'"><span class="dot"><b>'+(i+1)+'</b></span><h3>'+s.t+'</h3><p>'+s.p+'</p><span class="out">'+ARROW+' '+s.o+'</span></div>'}).join('');
function tlScroll(){
  var tl=$('#tl');if(!tl||!tl.offsetParent)return;
  var r=tl.getBoundingClientRect(),vh=window.innerHeight,mid=vh*.62;
  var p=Math.min(1,Math.max(0,(mid-r.top)/r.height));
  tl.style.setProperty('--p',p);
  $$('.step',tl).forEach(function(s,i){var sr=s.getBoundingClientRect();s.classList.toggle('lit',i===0||sr.top<mid)});
}

/* router */
var ROUTES=['home','services','work','process','about','contact'];
var cur=null,busy=false;
function routeFromHash(){var h=(location.hash||'').replace('#','');return ROUTES.indexOf(h)>-1?h:'home'}
function show(r){
  $$('.view').forEach(function(v){v.classList.toggle('show',v.id==='v-'+r)});
  $$('nav.main a').forEach(function(a){a.classList.toggle('act',a.dataset.r===r)});
  window.scrollTo(0,0);
  document.body.classList.remove('menu');
  $('#burger').setAttribute('aria-expanded','false');
  var names={home:'Chedex Web Agency',services:'Services | Chedex',work:'Work | Chedex',process:'Process | Chedex',about:'About | Chedex',contact:'Contact | Chedex'};
  document.title=names[r];
  prepReveal();countersInit();tlScroll();
}
function go(){
  var r=routeFromHash();
  if(cur===null){cur=r;show(r);return}
  if(r===cur||busy)return;
  busy=true;var w=$('.wipe');
  w.classList.remove('out');w.classList.add('in');
  setTimeout(function(){cur=r;show(r);w.classList.remove('in');w.classList.add('out');
    setTimeout(function(){w.classList.remove('out');w.style.transition='none';w.offsetHeight;w.style.transition='';busy=false;if(routeFromHash()!==cur)go()},620)},520);
}
window.addEventListener('hashchange',go);
go();

/* reveal on scroll */
var io=null;
function prepReveal(){
  if(io)io.disconnect();
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  $$('.view.show .rv').forEach(function(el,i){
    var r=el.getBoundingClientRect();
    if(r.top>window.innerHeight*.92){el.classList.add('pre');el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)}
  });
}

/* counters */
function countersInit(){
  $$('.view.show [data-to]').forEach(function(el){
    var to=+el.dataset.to;if(el.dataset.done)return;
    if(!('IntersectionObserver' in window))return;
    var o=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;o.disconnect();el.dataset.done=1;
      var t0=null;function f(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/1200);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)})},{threshold:.6});
    o.observe(el);
  });
}

/* mobile menu */
$('#burger').addEventListener('click',function(){var o=document.body.classList.toggle('menu');this.setAttribute('aria-expanded',o)});
$('#mmenu').addEventListener('click',function(e){if(e.target.closest('a')&&routeFromHash()===e.target.closest('a').getAttribute('href').slice(1))document.body.classList.remove('menu')});

/* cursor + magnetic */
var fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
if(fine){
  var c=$('.cur'),x=0,y=0,tx=0,ty=0;
  window.addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY;c.classList.add('on')});
  (function loop(){x+=(tx-x)*.18;y+=(ty-y)*.18;c.style.transform='translate('+(x-c.offsetWidth/2)+'px,'+(y-c.offsetHeight/2)+'px)';requestAnimationFrame(loop)})();
  document.addEventListener('mouseover',function(e){c.classList.toggle('big',!!e.target.closest('.work,.card'))});
  document.addEventListener('mousemove',function(e){
    var m=e.target.closest('.mag');
    $$('.mag').forEach(function(b){if(b!==m)b.style.transform=''});
    if(m){var r=m.getBoundingClientRect();m.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.25)+'px)'}
  });
}

/* contact brief */
$('#brief').addEventListener('submit',function(e){
  e.preventDefault();
  var name=$('#f-name').value.trim(),email=$('#f-email').value.trim();
  var needs=$$('input[name=need]:checked').map(function(i){return i.value});
  if(!name||!/.+@.+\..+/.test(email)){var bad=!name?$('#f-name'):$('#f-email');bad.focus();bad.style.boxShadow='0 0 0 4px #ffd320';return}
  var txt='Project brief for Chedex\n\nName: '+name+'\nEmail: '+email+'\nNeeds: '+(needs.join(', ')||'Not specified')+'\nBudget: '+$('#f-budget').value+'\nTimeline: '+$('#f-time').value+'\n\nAbout the project:\n'+($('#f-msg').value.trim()||'(no details yet)');
  $('#outTxt').textContent=txt;$('#out').classList.add('show');
  $('#out').scrollIntoView({behavior:'smooth',block:'center'});
});
$('#copyBrief').addEventListener('click',function(){
  var b=this,t=$('#outTxt').textContent;
  function done(m){b.textContent=m;setTimeout(function(){b.textContent='Copy brief'},1800)}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){done('Copied')},function(){sel()})}else sel();
  function sel(){var r=document.createRange();r.selectNodeContents($('#outTxt'));var s=getSelection();s.removeAllRanges();s.addRange(r);done('Press copy')}
});

window.addEventListener('scroll',tlScroll,{passive:true});
window.addEventListener('resize',tlScroll);
})();
