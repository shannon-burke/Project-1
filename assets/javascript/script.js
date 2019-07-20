var questionsAnswered = 0
var quiz = $("#quiz-questions-div")

var questions = [{
    question: "How much do you plan on taking care of the plant?"
    answers:[ "everyday", "once to a few times a week", "hardly ever"]
    values: [every 24 hours, every other day, once a week]
    
}, {
    question: "Do you want something out of the plant?"
    answers: ["something edible", "flowers", "just greenery"]
    values: []
    
}, {
    question: "How big do you want the plant?"
    answers: ["very small", "table top or shelf-size", "large floor plant"]
    values: []
    
}, {
    question: "How much sunlight does it need?"
    answers: ["lots of direct", "couple hours a day", "hardly any"]
    values: []

}

}]
function createAnswerButtons() {
    for (var i = 0; i < questions[questionsAnswered].choices.length; i++) {
        var answerButton = $("<button>");
        answerButton.text(questions[questionsAnswered].choices[i]);
        answerButton.addClass("btn btn-secondary quiz-button");
        answerButton.attr("value", questions[questionsAnswered].values[i]);
        answerButton.attr("answerName", questions[questionsAnswered].choices[i]);
        $("#quiz-buttons").append(answerButton);
    }
};