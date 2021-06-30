console.log("test")
var timeCount = document.querySelector(".timer")
var startButton = document.querySelector(".start")
var q1text = document.querySelector(".question1")
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
function displayQuestionAnswer() {
    var q1ElText = document.createElement("ol")
    var AnswerA = document.createElement("li")
    var AnswerB = document.createElement("li")
    var AnswerC = document.createElement("li")
    var AnswerD = document.createElement("li")
    q1ElText.textContent = questionAnswers.q1;
    AnswerA.textContent = questionAnswers.Answersq1.a;
    AnswerB.textContent = questionAnswers.Answersq1.b;
    AnswerC.textContent = questionAnswers.Answersq1.c;
    AnswerD.textContent = questionAnswers.Answersq1.d;
    

    q1text.appendChild(q1ElText)
    q1ElText.appendChild(AnswerA)
    q1ElText.appendChild(AnswerB)
    q1ElText.appendChild(AnswerC)
    q1ElText.appendChild(AnswerD)

    listAnswer.textContent = Answerq1A;
    console.log(Answerq1A)
};

function startQuiz(){
    startButton.setAttribute("style","display:none");






    console.log("Hello ")
    timer();
    

};



startButton.addEventListener("click",startQuiz);
