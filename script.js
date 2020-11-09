const question=document.querySelector('#question');
const choices=Array.from(document.querySelectorAll('.choice-text'));
const progressText=document.querySelector('#progressText');
const scoreText=document.querySelector('#score');
const progressBarFull=document.querySelector('#progressBarFull');

let currentQuestion ={}
let acceptingAnswer = true
let score = 0
let questionCounter= 0
let avaliableQuestions = []

let questions =[
    {
    question:'In The Legend of Zelda, Spectacle Rock is found on Death Mountain. In Breath of the Wild, where is it located?',
    choice1: 'Gerudo Region',
    choice2: 'Tal Tal Mountain Ridge',
    choice3: 'Forest of Time',
    answer: 1,
    },
    {
        question:'In The Legend of Zelda, you did not need a special item to make a raft move. In Breath of the Wild, you need what?',
        choice1: 'Korok Leaf',
        choice2: 'Paddle',
        choice3: 'Sail',
        answer: 1,
        },
        {
            question:'In The Legend of Zelda, Link wears his classic green tunic. In Breath of the Wild, Link new look is what?',
            choice1: 'Red Tunic',
            choice2: 'Black Tunic',
            choice3: 'Blue Tunic',
            answer: 3,
            },

            {
                question:'In The Legend of Zelda game, an old man gives Link a sword. In Legend of Zelda Breath of the Wild, an old man gives Link what?',
                choice1: 'Baked Apples',
                choice2: 'Bow & Arrow',
                choice3: 'Sheild',
                answer: 1,
                },

            
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame =()=>{
    questionCounter= 0
    score=0
    availableQuestions =[...questions]
    getNewQuestion()
}

getNewQuestion =() =>{
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score)

        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText ='Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width= '${(questionCounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = Math.floor(Math.random()* availableQuestions.length)
    currentQuestion = availableQuestions [questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach (choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex,1)

    acceptingAnswers = true
    }

    choices.forEach(choice => {
        choice.addEventListener('click', e =>{
         if(!acceptingAnswers)return

         acceptingAnswers = false
         const selectedChoice = e.target
         const selectedAnswer = selectedChoice.dataset['number']

         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
         'incorrect'

         if(classToApply === 'correct'){
             incrementScore(SCORE_POINTS)
         }

         selectedChoice.parentElement.classList.add(classToApply)

         setTimeout(() => {
             selectedChoice.parentElement.classList.remove(classToApply)
             getNewQuestion()
         },1000)
        })
    })

    incrementScore = num => {
        score +=num
        scoreText.innerText =score
    }

    startGame()