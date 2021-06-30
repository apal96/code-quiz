console.log("test")
var timeCount = document.querySelector(".timer")
var startButton = document.querySelector(".start")
var timeLeft =75;

function timer(){
    var timerCount = setInterval(function(){
    
    if (timeLeft >1){
        console.log(timeLeft)
        timeCount.textContent = timeLeft;
        timeLeft--;
       
    }else if (timeLeft===0){
        console.log()
        
    
    }
},1000);
};
 
function startQuiz(){
    console.log("Hello ")
    timer();
};


startButton.addEventListener("click",startQuiz);