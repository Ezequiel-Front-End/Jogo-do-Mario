const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over');
const audioJump = new Audio('/sound/jump.mp3');
const audoStart = new Audio('/sound/supermario.mp3');
const audioGameOver = new Audio ('/sound/gameOver.mp3');
const btn = document.querySelector('button');
const bt1 = document.querySelector('.btn1');
const bt2 = document.querySelector('.btn2');

bt1.addEventListener('click', ()=>{
    window.location.reload();
})

bt2.addEventListener('click', ()=>{
    window.location.href = '/index.html';
})


btn.addEventListener('click', ()=>{
    btn.style.display = 'none'
    starGame()
})

const starGame = () => {
    audoStart.play()
    pipe.classList.add('pipe-animation')
    start.computedStyleMap.dispay = 'none'
}

const restarGame = () =>{
    gameOver.computedStyleMap.display = 'none'
    pipe.computedStyleMap.left = ''
    pipe.computedStyleMap.right = '0'
    mario.computedStyleMap.width = '150px'
    mario.computedStyleMap.bottom = '0'
    start.computedStyleMap.display = 'none'
}

function Collizao() {

        const marioRect = mario.getBoundingClientRect();
        const tunnelRect = pipe.getBoundingClientRect();

        if (
            marioRect.right > tunnelRect.left &&
            marioRect.left < tunnelRect.right &&
            marioRect.bottom > tunnelRect.top &&
            marioRect.top < tunnelRect.bottom
        ) {
            mario.src = '/source/game-over.png'
            mario.style.height = 'auto'
            mario.style.width = '100px'
            audoStart.volume = '0'
            gameOver.style.display = 'flex'
            audioGameOver.play();
        }

}

setInterval(Collizao, 100);


const jump = () => {
    mario.classList.add('jump')
    audioJump.play()
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 800);
}

document.addEventListener('keypress', (e)=>{
    if(e.code === 'Space')  {
       jump()
    }
})
 
document.addEventListener('keypress', (e)=>{
    if(e.code == 'Enter'){
        starGame()
    }
})
