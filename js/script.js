// Custom Cursor
const ring = document.getElementById('cursor-ring');
const dot  = document.getElementById('cursor-dot');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
(function anim(){
  rx += (mx-rx)*.14; ry += (my-ry)*.14;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(anim);
})();
document.querySelectorAll('a,button,.skill-pill,.project-card,.btn-primary,.btn-outline,.btn-download,.btn-view,.contact-link').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('hovering'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('hovering'));
});

// Scroll Progress
window.addEventListener('scroll',()=>{
  const p = window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  document.getElementById('progress-bar').style.width=p+'%';
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY>60);
});

// Typewriter
const titles=['QA Engineer','Automation Tester','AI QA Builder','SDET'];
let ti=0, ci=0, del=false;
const el=document.getElementById('typed-title');
function typewrite(){
  const t=titles[ti];
  el.textContent = del ? t.slice(0,--ci) : t.slice(0,++ci);
  if(!del && ci===t.length){ setTimeout(()=>del=true,1800); setTimeout(typewrite,120); return; }
  if(del && ci===0){ del=false; ti=(ti+1)%titles.length; }
  setTimeout(typewrite, del?60:110);
}
typewrite();

// Terminal Animation
const lines=[
  {c:'cmd', t:'$ playwright test --project=chromium'},
  {c:'dim', t:'  Running 12 test files...'},
  {c:'pass',t:'  ✓ login flow (843ms)'},
  {c:'pass',t:'  ✓ form validation (312ms)'},
  {c:'pass',t:'  ✓ API response check (201ms)'},
  {c:'pass',t:'  ✓ user dashboard render (567ms)'},
  {c:'pass',t:'  ✓ ERP item price lookup (389ms)'},
  {c:'pass',t:'  ✓ 40,000 records validated (2.1s)'},
  {c:'dim', t:''},
  {c:'info',t:'  12 passed  •  0 failed  •  0 skipped'},
  {c:'pass',t:'  ✓ All tests passed in 4.6s'},
];
const body=document.getElementById('term-body');
function addLine(i){
  if(i>=lines.length){ const c=document.createElement('span'); c.className='term-cursor'; body.appendChild(c); return; }
  const s=document.createElement('span');
  s.className='term-line '+lines[i].c;
  s.style.animationDelay=(i*.18)+'s';
  s.textContent=lines[i].t;
  body.appendChild(s);
  setTimeout(()=>addLine(i+1), 200);
}
setTimeout(()=>addLine(0), 600);

// WhatsApp Widget
var WA_NUMBER = '919952405003'; // +91 99524 05003
const waBtn = document.getElementById('wa-btn');
const waChatBox = document.getElementById('wa-chat-box');
const waCloseBtn = document.getElementById('wa-close-btn');
const waSendBtn = document.getElementById('wa-send-btn');
const waMsgInput = document.getElementById('wa-msg-input');
const waNotif = document.getElementById('wa-notif');

// Show notification badge after 3s
setTimeout(()=>{ if(!waChatBox.classList.contains('open')) waNotif.style.display='flex'; }, 3000);

waBtn.addEventListener('click',()=>{
  waChatBox.classList.toggle('open');
  waNotif.style.display='none';
});
waCloseBtn.addEventListener('click',()=>{
  waChatBox.classList.remove('open');
});

function sendToWhatsApp(){
  const msg = waMsgInput.value.trim();
  const defaultMsg = "Hi Hariharan! I visited your portfolio and would like to connect.";
  const text = msg || defaultMsg;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url,'_blank');
  waMsgInput.value='';
  waChatBox.classList.remove('open');
}

waSendBtn.addEventListener('click', sendToWhatsApp);
waMsgInput.addEventListener('keydown', function(e){ if(e.key==='Enter') sendToWhatsApp(); });

// Scroll Fade-in
var obs = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.12});
document.querySelectorAll('.fade-up').forEach(function(el){ obs.observe(el); });

// Final separated package menu safety handler
(function () {
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  ready(function () {
    var btn = document.getElementById('hamburger');
    var menu = document.getElementById('mobileNav');
    var closeBtn = document.getElementById('mobileNavClose');
    if (!btn || !menu) return;

    function setMenu(open) {
      btn.classList.toggle('open', open);
      menu.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    }

    btn.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      setMenu(!menu.classList.contains('open'));
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        setMenu(false);
      });
    }

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  });
})();
