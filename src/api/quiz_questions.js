import SUBJECTS from './subjects'
import US_STATES from './us_states'

var QuizQuestions = {
    "wjs-q1": {
        next: "wjs-q2",
        type: "input-text",
        length: 32,
        question: "Full Name",
        value: "name"
    },
    "wjs-q2": {
        next: "wjs-q3",
        type: "input-number",
        question: "Age",
        min: 10,
        max: 50,
        value: "age"
    },
    "wjs-q3": {
        next: "wjs-q4",
        type: "select",
        question: "Do you like working in groups or do you prefer to focus on individual projects?",
        options: ["Groups", "Individually"],
        value: "work_preference"
    },
    "wjs-q4": {
        next: "wjs-q5",
        type: "select",
        question: "Would you rather lead a team, or follow a team leader?",
        options: ["Taking charge", "Be part of a team", "Both"],
        value: "lead_preference"
    },
    "wjs-q5": {
        next: "wjs-q6",
        type: "select",
        question: "Which is more rewarding to you?",
        options: ["Big projects over time", "Multiple small projects"],
        value: "project_preferences"
    },
    "wjs-q6": {
        next: "wjs-q7",
        type: "select",
        question: "Do you prefer a work routine or new challenges every day?",
        options: ["Consistent work", "New challenges"],
        value: "challenge_preference"
    },
    "wjs-q7": {
        next: "",
        type: "select-jump",
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
        ],
        value: "education"
    },
    "wjs-q7a": {
        next: "wjs-q8",
        type: "select",
        question: "What program are you enrolled in?",
        options: SUBJECTS
    },
    "wjs-q7b": {
        next: "wjs-q8",
        type: "select",
        question: "What are you studying?",
        options: SUBJECTS
    },
    "wjs-q8": {
        next: "wjs-q9",
        type: "select",
        question: "What do you plan to do after completing the current level?",
        options: ["Pursuing further education.", "Start a career."]
    },
    "wjs-q9": {
        next: "wjs-q10",
        type: "select-multiple",
        count: 3,
        question: "Select the top 3 subjects that interest you.",
        options: SUBJECTS
    },
    "wjs-q10": {
        next: "wjs-q11",
        type: "select",
        question: "What state are you residing in?",
        options: US_STATES
    },
    "wjs-q11": {
        next: "wjs-q12",
        type: "select",
        question: "Do you want to stay in that location ? If not, type in the top 3 states you would want to be in?",
        options: US_STATES.concat("Does not matter")
    },
    "wjs-q12": {
        next: "wjs-q13",
        type: "input",
        as: "string",
        length: 1000,
        question: "Have you thought about where your water comes from or where your water goes?",
    },
    "wjs-q13": {
        next: "wjs-q14",
        type: "input",
        as: "string",
        length: 1000,
        question: "Have you ever thought about a career in the water industry ? If so, what careers have you considered ? If not, please explain why.",
    },
    "wjs-q14": {
        next: "wjs-results",
        type: "input",
        as: "email",
        length: "100",
        question: "Email",
    }
}

export default QuizQuestions;
