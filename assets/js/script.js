//Elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//Questions for Quiz
let questions =[
    {
    question:"In The Legend of Zelda game, an old man gives Link a sword. In Legend of Zelda Breath of the Wild, an old man gives Link what?",
    choiceA:"A bow & arrows",
    choiceB: "Baked Apples",
    choiceC:"Breakable Armor",
    correct: "B"
    },

    {
    question:"In The Legend of Zelda, Spectacle Rock is found on Death Mountain. In Breath of the Wild, where is it located?"
    choiceA:"Gerudo Region",
    choiceB: "Tal Tal Mountain Ridge",
    choiceC:"Forest of Time",
    correct: "A"
    },

        {
        question:"In The Legend of Zelda, you didn't need a special item to make a raft move. In Breath of the Wild, you need what?"
        choiceA:"A korok Leaf",
        choiceB: "Paddle",
        choiceC:"A Sail",
        correct: "A"
        },

        {
        question:"In The Legend of Zelda, Link wears his classic green tunic. In Breath of the Wild, Link's new look is what?"
        choiceA:"A red tunic",
        choiceB: "A black tunic",
        choiceC:"A blue tunic",            
        correct: "C"
        },  
];

let lastQuestion= questions.length -1;
let runningQuestion = 0;

//Rendering of a Question
function renderQuestion(){
    let q=questions[runningQuestion];

    question.innerHTML ="<p>"+q.question+ "</p>";
    choiceA.innerHTML=q.choiceA;
    choiceB.innerHTML=q.choiceB;
    choiceC.innerHTML=q.choiceC;
}

//Progress Render
function progressRender(){
    for(let qIndex=0; qIndex <=lastQuestion; qIndex++){
        progress.innerHTML +="<div class='prog' id="+ qIndex +"></div>";
    }
}

function answwerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor ="red";
}

//Counter Render
const questionTime =10;
const gaugeWidth =150;
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;

function counterRender(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px";
        count ++;
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
          runningQuestion++;
          questionRender();

        }else { clearInterval(TIMER);
        scoreRender();}
    }
}

//Check Answer
function checkAnswer(answer){
    if(questions[runningQuestion].correct == answer){
        score++;
        answwerIsCorrect();
    }else{
        answerIsWrong();
    }if(runningQuestion<lastQuestion){
        count=0;
        runningQuestion++;
        questionRender();

    }else{
        clearInterval(TIMER);
        scoreRender();

    }
}

//Start Quiz
const start =document.getElementById("start");
start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender, 1000);
    progressRender();
    questionRender();
    quiz.style.display ="block";
}

//Operator

x=(y =="one") ? 1:0;
x =(y == "one") ? 1: (y == "zero") ? 0 : 2;

 condition ? ExprTrue : ExprFalse

 //Score Render

 function scoreRender(){
     scoreContainer.style.display ="block";
     let scorePerCent =Math.round(100* score /questions.length);

 }