
const score=JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
 };
updateElementScore()




 function updateElementScore(){ document.querySelector('.js-score')
 .innerHTML=`wins: ${score.win} lose: ${score.lose} tie: ${score.tie}`}
    
function playgame(playermove) {
 computerMove=pickcomputermove()


result=''
if(playermove === 'scissors')
  {if(computerMove==='rock'){result='lose.'}
  else if(computerMove==='paper'){result='win.'}
  else if(computerMove==='scissors'){result='tie.'}
}
if(playermove === 'rock')
  {if(computerMove==='rock'){result='tie.'}
  else if(computerMove==='paper'){result='lose.'}
  else if(computerMove==='scissors'){result='win.'}
}
if(playermove === 'paper')
  {if(computerMove==='rock'){result='win.'}
  else if(computerMove==='paper'){result='tie.'}
  else if(computerMove==='scissors'){result='lose.'}
}
if(result === 'win.'){score.win +=1}
else if(result === 'lose.'){score.lose +=1}
else if(result === 'tie.'){score.tie +=1}

localStorage.setItem('score',JSON.stringify(score))

updateElementScore()
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-move').innerHTML=`You <img src="images/${playermove}-emoji.png" class="design" > . computer <img src="images/${computerMove}-emoji.png " class="design">`;
}


function pickcomputermove()

 {RandomNumber= Math.random()
 let computerMove=''
if (RandomNumber>=0 && RandomNumber<1/3){computerMove='rock'}
else if(RandomNumber>=1/3 && RandomNumber<2/3){computerMove='paper'}
else if(RandomNumber>=2/3 && RandomNumber<3/3){computerMove='scissors'}

return computerMove; 

 }