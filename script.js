console.log("test")
var timeCount = document.querySelector(".timer")
var startButton = document.querySelector(".start")
var timeLeft =75;
var questionAnswers = {
    q1:"Objects are enclosed in: ",
    q2:"Arrays are enclosed in: ",
    q3:"The condition in an if/else statements is enclosed in: ",
    q4:"What does the Math.floor() function do?",
    q5:"What does the Math.random() function do?",
    Answersq1:{a:"Curly brackets",b:"Parenthesis", c:"Square Brackets",d:"Quotation Marks'"},
    Answerqs2:{a:"Curly brackets",b:"Parenthesis", c:"Square Brackets",d:"Quotation Marks'"},
    Answerqs3:{a:"Curly brackets",b:"Parenthesis", c:"Arrow Keys",d:"Quotation Marks'"},
    Answerqs4:{
        a:"Returns the largest integer less than or equal to a given number",
        b:"Returns the value of a number rounded to the nearest integer ",
        c:"Returns a pseudo-random number in the range 0 to less than 1 ",
        d:"Returns a pseudo-random number in the range 0 to infinity"},
    Answerqs5:{
        a:"Returns the largest integer less than or equal to a given number",
        b:"Returns the value of a number rounded to the nearest integer ",
        c:"Returns a pseudo-random number in the range 0 to less than 1 ",
        d:"Returns a pseudo-random number in the range 0 to infinity"}



}

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
    clearInterval(startButton);

};


startButton.addEventListener("click",startQuiz);
{

}