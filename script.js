const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('[data-course]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#course').value=link.dataset.course;}));
document.querySelector('#year').textContent=new Date().getFullYear();
// Le formulaire HTML transmet les demandes via FormSubmit (après validation initiale de l’adresse e-mail).
