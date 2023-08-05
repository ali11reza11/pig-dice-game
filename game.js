let scores , roundscores , activeplayer;
init();

function btnroll(){
let dice =  Math.floor(Math.random() * 6) + 1;

let dicedom = document.querySelector(`.dice`);
dicedom.style.display = `block`;

dicedom.src =  dice + `.png`

roundscores += dice;
if(dice !== 1){
document.querySelector(`#current--` + activeplayer).textContent = roundscores;
}
else{
   nextplayer();
}
}

function nextplayer(){
 if(activeplayer === 0){
        activeplayer = 1;
    }else{
        activeplayer = 0;
    }
    roundscores = 0;
    document.getElementById(`current--0`).textContent = `0`;
    document.getElementById(`current--1`).textContent = `0`;

    document.querySelector(`.player--0`).classList.toggle(`player-active`);
    document.querySelector(`.player--1`).classList.toggle(`player-active`);

    document.querySelector(`.dice`).style.display = `none`
}

function btnhold(){
let finallscre = scores[activeplayer]+=roundscores

document.querySelector(`#score-`+activeplayer).textContent = finallscre;

if(finallscre>= 100){
    document.querySelector(`#name--` + activeplayer).textContent = `winner`;
    document.querySelector(`.player--` + activeplayer).classList.add(`player--winner`)
      document.querySelector(`.player--` + activeplayer).classList.remove(`player-active`)
}else{
    nextplayer();
}


}
function init(){
scores = [0,0];
roundscores = 0;
activeplayer = 0;
document.querySelector(`.dice`).style.display = `none`;
document.getElementById(`score-0`).textContent = `0`
document.getElementById(`score-1`).textContent = `0`
document.getElementById(`current--0`).textContent = `0`;
document.getElementById(`current--1`).textContent = `0`;
document.querySelector(`#name--0 `).textContent = `player 1`;
document.querySelector(`#name--1` ).textContent = `player 2`;
document.querySelector(`.player--0` ).classList.remove(`player--winner`)
document.querySelector(`.player--1` ).classList.remove(`player--winner`)
document.querySelector(`.player--0`).classList.remove(`player-active`)
document.querySelector(`.player--1`).classList.remove(`player-active`)
document.querySelector(`.player--0`).classList.add(`player-active`)
}
function newbtn(){
    init();
       
}


document.querySelector(`.btn-hold`).addEventListener(`click`, btnhold);
document.querySelector(`.btn-roll`).addEventListener(`click`, btnroll);
document.querySelector(`.btn-new`).addEventListener(`click`,newbtn);
