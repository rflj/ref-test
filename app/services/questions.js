import questions from "../assets/questions.json";

const questionList = questions;

// Add index to each element
questionList.forEach((question, id) => {
  question.id = id + 1;
});

const questionService = {
    getQuestions: () => {
        return questionList;
    },
    getQuestion: (id) => {
        return questionList.find(question => question.id === id);
    },
    getQuestionsLength: () => {
        return questionList.length;
    },
};


export default questionService;