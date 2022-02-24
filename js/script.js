'use strict';


//selecting elements : 
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const score0El = document.querySelector('#score--0') ; 
const score1El = document.querySelector('#score--1') ;
const diceEl = document.querySelector('.dice') ; 

const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')



const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let current  = 0; 
let activePlayer ; 

function intialisation() {
    score0El.textContent = '0'
    score1El.textContent = '0'; 
    diceEl.classList.add('hidden')
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    current0El.textContent = '0'
     current = 0;
     activePlayer = 0;

    

}
intialisation()


function rollDice (){
    let alea = Math.trunc(Math.random() * 6) + 1;
    console.log(alea);
    diceEl.classList.remove('hidden') ;
    diceEl.src = `img/dice-${alea}.png`;
    
    
    
    
    if (alea !== 1) {
      
      
      current = current +  alea;
      document.getElementById(`current--${activePlayer}`).textContent = current
    }

    else(
        switchPlayer()
    )

}

function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0 ; 
    current = 0 ; 
    activePlayer = activePlayer === 0 ? 1 : 0;
     player0El.classList.toggle('player--active');
     player1El.classList.toggle('player--active');
}
btnNew.addEventListener('click' , intialisation)
btnRoll.addEventListener('click' , rollDice)





