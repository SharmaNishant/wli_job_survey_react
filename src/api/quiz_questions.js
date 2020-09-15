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
        next: "wjs-q8",
        type: "select",
        question: "What type of schooling are you currently in? If not currently in school, please provide highest level:",
        options: ["High school", "Trade school", "Community college", "University",],
        value: "education"
    },
    "wjs-q8": {
        next: "wjs-q9",
        type: "datalist",
        question: "What are you studying or which program are you enrolled in?",
        options: SUBJECTS,
        value: "subject"
    },
    "wjs-q9": {
        next: "wjs-q10",
        type: "select",
        question: "What do you plan to do after completing the current level?",
        options: ["Pursuing further education.", "Start a career."],
        value: "career_plan"
    },
    "wjs-q10": {
        next: "wjs-q11",
        type: "datalist-multiple",
        count: 3,
        question: "Select the top 3 subjects that interest you.",
        options: SUBJECTS,
        value: "subjects_of_interest"
    },
    "wjs-q11": {
        next: "wjs-q12",
        type: "datalist",
        question: "What state are you residing in?",
        options: US_STATES,
        value: "residency"
    },
    "wjs-q12": {
        next: "wjs-q13",
        type: "datalist-multiple",
        count: 3,
        question: "Do you want to stay in that location ? If not, type in the top 3 states you would want to be in?",
        options: US_STATES,
        value: "preferred_residency"
    },
    "wjs-q13": {
        next: "wjs-q14",
        type: "input-textbox",
        length: 1000,
        question: "Have you thought about where your water comes from or where your water goes?",
        value: "water_thoughts"
    },
    "wjs-q14": {
        next: "wjs-q15",
        type: "input-textbox",
        length: 1000,
        question: "Have you ever thought about a career in the water industry ? If so, what careers have you considered ? If not, please explain why.",
        value: "career_thoughts"
    },
    "wjs-q15": {
        next: "wjs-results",
        type: "input-email",
        length: 100,
        question: "Email",
        value: "email"
    }
}

export default QuizQuestions;
