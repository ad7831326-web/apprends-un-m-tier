const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('[data-course]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#course').value=link.dataset.course;}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#lead-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const body=[`Nom : ${data.get('name')}`,`Téléphone : ${data.get('phone')}`,`E-mail : ${data.get('email')||'Non renseigné'}`,`Formation : ${data.get('course')}`,`Message : ${data.get('message')||'Aucun'}`].join('\n');const subject=encodeURIComponent('Demande de formation - '+data.get('name'));const mailBody=encodeURIComponent(body);const status=document.querySelector('#form-status');status.textContent='Votre demande est prête. Votre application de messagerie va s’ouvrir si une messagerie est configurée.';window.location.href=`mailto:CONTACT_EMAIL_A_REMPLACER?subject=${subject}&body=${mailBody}`;});
