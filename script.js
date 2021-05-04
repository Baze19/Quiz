const QuizData = [
    {
        questions: 'when dis nigeria got its independence',
        a: '1986',
        b: '1960',
        c: '1777',
        d: '1959',
        correct: 'b'
    },
    {
        questions: 'who is the founder of Afro music',
        a: 'shina peters',
        b: 'Ebenezer Obey',
        c: 'Don jazzy',
        d: 'Fela',
        correct: 'd'
    },
    {
        questions: 'what is the most used programming language used in 2019 ',
        a: 'java script',
        b: 'csharp',
        c: 'java',
        d: 'python',
        correct: 'c'
    },
    {
        questions: 'who is the founder of facebook',
        a: 'peace fredrik',
        b: 'mark zukerberg',
        c: 'Donald trump',
        d: 'Abiodun Baze',
        correct: 'b'
    },
]
const questionEl = document.getElementById('question')
//then i want to target the label for each input so i can load the options
const aText = document.getElementById('a-text')
const bText = document.getElementById('b-text')
const cText = document.getElementById('c-text')
const dText = document.getElementById('d-text')
const sub = document.getElementById('submit')
const answersel = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')
let currentQuestion = 0


loadquiz()

let score =0

function loadquiz() {


    deselectedInput()
    const Initialquestion = QuizData[currentQuestion]
    //above means i passed in the currentquestion to serve as index of the each arrays in qyizdara arrray
    questionEl.innerText = Initialquestion.questions
    aText.innerText = Initialquestion.a
    bText.innerText = Initialquestion.b
    cText.innerText = Initialquestion.c
    dText.innerText = Initialquestion.d



}
function deselectedInput() {
    answersel.forEach(answeradio => {
        answeradio.checked = false
    })


}




function selectedInput() {
    let answer = undefined

    answersel.forEach(answeradio => {
        if (answeradio.checked) {
            return answer = answeradio.id


        }

    })
    return answer
}

sub.addEventListener("click", () => {
    //i want to call the seleected input and hold it to a variable
    //so  ui can check if the selected ===correct answer while calling the selected func
    const answer = selectedInput()

    if (answer) {
        if (answer === QuizData[currentQuestion].correct) {
            score++
        }
        
        currentQuestion++
        if (currentQuestion < QuizData.length) {
            loadquiz()
        }
        else {
           quiz.innerHTML = `<h2>you have scored ${score}/${QuizData.length}</h2>
            <button 
           onclick="location.reload()">
           Reload </button>`
        }
 
    }

    //i needed to call the function agin because oall the quiz are in the function
})


