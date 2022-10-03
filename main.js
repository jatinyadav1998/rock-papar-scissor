const score =document.getElementById("score")
// console.log(score)
const choices =document.querySelectorAll(".choice")
// console.log(choices)
const result = document.querySelector("#result")
// console.log(result)
const restart=document.getElementById("restart")
// console.log(restart)
const modal=document.querySelector(".modal")
// console.log(modal)
const scoreboard ={player : 0, computer : 0}
const jk =document.getElementById("jk")


function play(e){
    restart.style.display="inline-block"
   
    const playerChoice=e.target.id
    // console.log(playerChoice)
      const computerChoice=getcomputerChoice()
    //   console.log(computerChoice)
    const winner=getWinner(playerChoice,computerChoice);
    // console.log("computer Choice",computerChoice,"winner",winner)
    showWinner(winner,computerChoice) 
}

function restartGame(){
    scoreboard.computer =0;
    scoreboard.player = 0;
    restart.style.display="none"
    score.innerHTML=`
    <p>player: 0</p>
    <p>computer: 0</p>`

    // jk.innerHTML=`<h3>Please Make Your Selection</h3>`
}
function getWinner(p,c){
// console.log(p,c)
if(p==c){
    return"draw";
}else if(p=="rock"){
    if(c=="paper"){
        return "computer";
     } else{
            return "player"
    }
}else if(p=="paper"){
if(c=="scissors"){
    return "computer";
}else{
    return"player"
}

}else if(p=="scissors"){
    if(c=="rock"){
        return "computer";
    }else{
        return "player"
    }

}

      
}
function getcomputerChoice(){
    const randomNumber=Math.random();
    // console.log(randomNumber)
     if(randomNumber<0.23){
        return"rock";
        }else if(randomNumber>0.89){
         return "paper"
        }else
        return "scissors"
        

    }
    function showWinner(winner,computerchoice){
        if(winner=="player"){
            scoreboard.player++;
            result.innerHTML=`
            <h1 Class='text-win'>you win</h1>
            <i class='fas fa-hand-${computerchoice} fa-10x'></i> 
         `}
         else if(winner=='computer'){
             scoreboard.computer++;
             result.innerHTML=`
             <h1 class = 'text-lose'>You lose</h1>
             <i class='fas fa-hand-${computerchoice} fa-10x'></i> 
             `
        }else{

            result.innerHTML=`
            <h1 class='text-lose'>Draw</h1>
            <i class='fas fa-hand-${computerchoice} fa-10x'></i>
            ` 
        }
score.innerHTML=`
<p>Player  : ${scoreboard.player}</p>
<p>computer: ${scoreboard.computer}</p>
`
modal.style.display ="block"
    }
function clearModal(e){
    if (e.target==modal){
        modal.style.display ="none"
    }
}
// Event listener
choices.forEach(function(choice){
    choice.addEventListener("click",play)

// choice.addEventListener("click",function(){
    // console.log("hello")
})
window.addEventListener("click",clearModal)

restart.addEventListener("click",restartGame)