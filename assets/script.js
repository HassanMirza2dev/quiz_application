let currentQuestion = 0;
let score = 0;
let radios = document.querySelectorAll('input[name="answer"]');
let questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which JavaScript method selects an element by its ID?",
        options: [
            "querySelectorAll()",
            "getElementsByClassName()",
            "getElementById()",
            "getElementsByTagName()"
        ],
        correctAnswer: "getElementById()"
    },
    {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: [
            "const",
            "let",
            "function",
            "return"
        ],
        correctAnswer: "let"
    },
    {
        question: "Which method is used to select an HTML element using its CSS selector?",
        options: [
            "getElementById()",
            "querySelector()",
            "createElement()",
            "addEventListener()"
        ],
        correctAnswer: "querySelector()"
    },
];
document.querySelector("#start").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    document.querySelector("#start").style.display = "none";
    showQuiz();
})
function showQuiz() {
    let current = questions[currentQuestion];
    document.querySelector("#question").textContent=current.question;
    for (let index = 0; index < radios.length; index++) {  
        radios[index].value=current.options[index];
        radios[index].nextElementSibling.textContent=current.options[index]
    }
    
}