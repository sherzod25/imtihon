const menu = document.getElementById('nav-menu');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', ()=>{
    menu.style.display = 'flex'
    closeBtn.style.display = 'inline-block'
    openBtn.style.display = 'none'
})


const closeNav = ()=>{
    menu.style.display = 'none'
    closeBtn.style.display = 'none'
    openBtn.style.display = 'inline-block'
}

openBtn.addEventListener('click', closeNav)