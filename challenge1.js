//Global Variables
var score =[0,0], roundScore, activePlayer, gameplaying = true, finalscore;

init();  // To create new game

finalscore= document.querySelector('.final-score').value;
// This event triggers a new game
document.querySelector('.btn-new').addEventListener('click', init);


// This event when triggered calls a function to roll a dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gameplaying){
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
        var dice1= Math.floor(Math.random()*6)+1;
        var dice2= Math.floor(Math.random()*6)+1;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
        document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';
        if( dice1 === 1 || dice2 === 1){
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            nextPlayer();
        }
        else if()
        else{
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    }
});


// This event when triggered calls a function to add round score to players score
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameplaying){
        score[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
        if(score[activePlayer]>finalscore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameplaying =false;
        }
        roundScore=0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        nextPlayer();
    }
});
 
function nextPlayer(){
    document.querySelector('.dice').style.display = 'none';
    if(gameplaying){
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        activePlayer===0 ? activePlayer=1 : activePlayer=0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    }
}

function init() {
    // Initializing all variables to 0.
    roundScore = activePlayer = 0 ;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    // Not showing value of dice
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('active');
}

