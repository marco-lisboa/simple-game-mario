const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.gameover');
const clouds = document.querySelector('.clouds');
const btn = document.querySelector('.btn');
var pontuacao = 0;


const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.src = '../images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
       
        gameover.style.opacity = '1';
        
        btn.style.cursor = 'pointer'
        btn.addEventListener("click", function() {
            location.reload();
        }); 
        
        
        clearInterval(loop);
    }
    
  
}, 10)

document.addEventListener('keydown', jump);







// function criaPLacar() {
//     const placar = {
//         pontuacao: 0,
//         desenha() {
//             context.font = '50px serif';
//             context.fillText('Hello World', 50, 90);
//             placar.pontuacao
//         },
//         atualiza() {

//         },
//     }
//     return placar;
// }

// game = {
//     inicializa() {
//         globalThis.placar = criaPLacar();
//     }, 
//     desenha() {
    
//     },
//     atualiza() {
    
//     }
//     };
