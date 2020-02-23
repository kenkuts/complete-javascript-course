/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Pass the pigs:

var scores = [0,0];
var roundScores = 0; 
var activePlayer = 0; 

//document.querySelector('#current-' + activePlayer).innerHTML = '';
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {

    // Generate Random Number
    var dice = Math.floor(Math.random() * 6 + 1);

    // Disply the dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice +'.png';
    
    // Game logic
    if (dice === 1) {
        // display new score 
        roundScores = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
        
        // remove the active to old player and change to the other player
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        // add active to the new player
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        
        // dice display is back to none to signify new players turn
        document.querySelector('.dice').style.display = 'none';
    } else {
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores; 
    }


    // generate a random number for whoevers turn it is
    // if the number is 1 then reset the accumulated score then switch to next playey 

    // else keep rolling
    
    // until 
});





























