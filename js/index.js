const btn = document.querySelector('button');
const content = document.getElementById('content');
const spinner = document.querySelector('.container-carregar');
const estrutura = document.querySelector('.estrura')

btn.addEventListener('click', ()=>{
    content.style.display = 'none'
    spinner.style.display = 'block'
    estrutura.style.background = 'white'
    setTimeout(() => {
            window.location.href = '/view/game.html'
    }, 3000);
});