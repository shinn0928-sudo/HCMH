// Google Analytics 4
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','G-7EWMSKFDFS');
const gaScript=document.createElement('script');
gaScript.async=true;
gaScript.src='https://www.googletagmanager.com/gtag/js?id=G-7EWMSKFDFS';
document.head.appendChild(gaScript);

const s=document.querySelector('#site-search');
if(s){s.addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('[data-search]').forEach(x=>x.style.display=x.dataset.search.toLowerCase().includes(q)?'':'none')})}
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
