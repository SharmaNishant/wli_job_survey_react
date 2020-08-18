var Subjects = [
    "Computer Science",
    "Civil Engineering",
    "Welding"
]

var QuizQuestions = {
    "wjs-q1": {
        next: "wjs-q2",
        type: "input",
        as: "string",
        length: 32,
        question: "Full Name",
    },
    "wjs-q2": {
        next: "wjs-q3",
        type: "input",
        as: "integer",
        question: "Age",
    },
    "wjs-q3": {
        next: "wjs-q4",
        type: "select",
        question: "Do you like working in groups or do you prefer to focus on individual projects?",
        options: ["Groups", "Individually"]
    },
    "wjs-q4": {
        next: "wjs-q5",
        type: "select",
        question: "Would you rather lead a team, or follow a team leader?",
        options: ["Taking charge", "Be part of a team", "Both"]
    },
    "wjs-q5": {
        next: "wjs-q6",
        type: "select",
        question: "Which is more rewarding to you?",
        options: ["Big projects over time", "Multiple small projects"]
    },
    "wjs-q6": {
        next: "wjs-q",
        type: "select",
        question: "Do you prefer a work routine or new challenges every day?",
        options: ["Consistent work", "New challenges"]
    },
    "wjs-q7": {
        next: "",
        type: "select",
        question: "What type of schooling are you currently in? If not currently in school, please provide highest level:",
        options: [
            {
                value: "High school",
                next: "wjs-q8"
            },
            {
                value: "Trade school",
                next: "wjs-q7a"
            },
            {
                value: "Community college",
                next: "wjs-q7a"
            },
            {
                value: "University",
                next: "wjs-q7b"
            },
        ]
    },
    "wjs-q7a": {
        next: "wjs-q8",
        type: "select",
        question: "What program are you enrolled in?",
        options: Subjects
    },
    "wjs-q7b": {
        next: "wjs-q8",
        type: "select",
        question: "What are you studying?",
        options: Subjects
    },
}

//     Question 8
// After completing the current level, do you plan to to continue pursuing formal education, or do you plan to start a career ?

//     Question 9
// List the top 3 subjects that interest you

// Question 10
// What state are you residing in?

//     Question 11
// Do you want to stay in that location ? If not, type in the top 3 states you would want to be in.
// Option to put state does not matter I am flexible

// Question 12
// Have you thought about where your water comes from or where your water goes ?

//     Question 13
// Have you ever thought about a career in the water industry ? If so, what careers have you considered ? If not, please explain why.



export default QuizQuestions;
