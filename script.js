console.log("test")
var timeCount = document.querySelector(".timer")
var startButton = document.querySelector(".start")
var questionEl = document.querySelector(".question")
var timeLeft =75;
var points = 0;
var questionAnswers = {
    q1:"Objects are enclosed in: ",
    q2:"Arrays are enclosed in: ",
    q3:"The condition in an if/else statements is enclosed in: ",
    q4:"What does the Math.floor() function do?",
    q5:"What does the Math.random() function do?",
    Answersq1:{a:"Curly brackets",b:"Parenthesis", c:"Square Brackets",d:"Quotation Marks'"},
    Answersq2:{a:"Curly brackets",b:"Parenthesis", c:"Square Brackets",d:"Quotation Marks'"},
    Answersq3:{a:"Curly brackets",b:"Parenthesis", c:"Arrow Keys",d:"Quotation Marks'"},
    Answersq4:{
        a:"Returns the largest integer less than or equal to a given number",
        b:"Returns the value of a number rounded to the nearest integer ",
        c:"Returns a pseudo-random number in the range 0 to less than 1 ",
        d:"Returns a pseudo-random number in the range 0 to infinity"},
    Answersq5:{
        a:"Returns the largest integer less than or equal to a given number",
        b:"Returns the value of a number rounded to the nearest integer ",
        c:"Returns a pseudo-random number in the range 0 to less than 1 ",
        d:"Returns a pseudo-random number in the range 0 to infinity"},
    // q1CorrectAnswer:this.Answersq1.a,
    q2CorrectAnswer:"Square Brackets",
    q3CorrectAnswer:"Parenthesis",
    q4CorrectAnswer:"Returns the largest integer less than or equal to a given number",
    q5CorrectAnswer:"Returns a pseudo-random number in the range 0 to less than 1"        
}
var q1CorrectAnswer = questionAnswers.Answersq1.a;
var q2CorrectAnswer = questionAnswers.Answersq2.c;
var q3CorrectAnswer = questionAnswers.Answersq3.b;
var q4CorrectAnswer = questionAnswers.Answersq4.a;
var q5CorrectAnswer = questionAnswers.Answersq5.d;


function timer(){
    var timerCount = setInterval(function(){
    
    if (timeLeft >1){
        //console.log(timeLeft)
        timeCount.textContent = timeLeft;
        timeLeft--;
       
    }else if (timeLeft===0){
        console.log()
        
    
    }
},1000);
};
function displayQuestionAnswer(qustionNum, answerNum,qCA) {
    var q1ElText = document.createElement("ol")
    var AnswerA = document.createElement("button")
    var AnswerB = document.createElement("button")
    var AnswerC = document.createElement("button")
    var AnswerD = document.createElement("button")
    AnswerA.setAttribute("style","display:block")
    AnswerB.setAttribute("style","display:block")
    AnswerC.setAttribute("style","display:block")
    AnswerD.setAttribute("style","display:block")
    q1ElText.textContent = qustionNum;
    AnswerA.textContent = "1. " +  answerNum.a;
    AnswerB.textContent = "2. " + answerNum.b;
    AnswerC.textContent = "3. " + answerNum.c;
    AnswerD.textContent = "4. " + answerNum.d;
    AnswerA.addEventListener("click",function(event){
        checkAnswer(AnswerA.innerText,qCA)
    });
    AnswerB.addEventListener("click",function(event){
        checkAnswer(AnswerB.innerText,qCA)
    });
    AnswerC.addEventListener("click",function(event){
        checkAnswer(AnswerC.innerText,qCA)
    });
    AnswerD.addEventListener("click",function(event){
        checkAnswer(AnswerD.innerText,qCA)
    });


    
    

    questionEl.appendChild(q1ElText)
    q1ElText.appendChild(AnswerA)
    q1ElText.appendChild(AnswerB)
    q1ElText.appendChild(AnswerC)
    q1ElText.appendChild(AnswerD)

    // listAnswer.textContent = Answerq1A;
    // console.log(Answerq1A)
};
function checkAnswer(userAnswer,correctAnswer){
    if(userAnswer === correctAnswer){
        points++;
        console.log(points)
    }else if (userAnswer != correctAnswer){
        timeLeft = timeLeft-5;
    }else{
        return;
    }
    
    

};
function startQuiz(){
    startButton.setAttribute("style","display:none");
    timer();
    displayQuestionAnswer(questionAnswers.q1,questionAnswers.Answersq1,q1CorrectAnswer);
    checkAnswer(AnswerB.innerText,qCA)
    
    displayQuestionAnswer(questionAnswers.q2,questionAnswers.Answersq2,q2CorrectAnswer);
    
    displayQuestionAnswer(questionAnswers.q3,questionAnswers.Answersq3,q3CorrectAnswer);
    
    displayQuestionAnswer(questionAnswers.q4,questionAnswers.Answersq4,q4CorrectAnswer);
    
    displayQuestionAnswer(questionAnswers.q5,questionAnswers.Answersq5,q5CorrectAnswer);
    
};



startButton.addEventListener("click",startQuiz);


