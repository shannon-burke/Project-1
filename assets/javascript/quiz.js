var questionsAnswered = 0
var quiz = $("#quiz-buttons-div")

var questions = [{
    question: "How much do you plan on taking care of the plant?",
    answers:[ "everyday", "once to a few times a week", "hardly ever"],
    values: ["water-high", "water-mid", "water-low"]
    
}, {
    question: "Do you want something out of the plant?",
    answers: ["something edible", "flowers", "just greenery"],
    values: ["utility-edible", "utility-flowers", "utility-greenery"]
    
}, {
    question: "How big do you want the plant?",
    answers: ["very small", "table top or shelf-size", "large floor plant"],
    values: ["size-small", "size-table", "size-large"]
    
}, {
    question: "How much sunlight does it need?",
    answers: ["lots of direct", "couple hours a day", "hardly any"],
    values: ["sunlight-high", "sunlight-mid", "sunlight-low"]

}

}]
function createAnswerButtons() {
    for (var i = 0; i < questions[questionsAnswered].choices.length; i++) {
        var answerButton = $("<button>");
        answerButton.text(questions[questionsAnswered].choices[i]);
        answerButton.addClass("btn btn-secondary quiz-button");
        answerButton.attr("value", questions[questionsAnswered].values[i]);
        answerButton.attr("answerName", questions[questionsAnswered].choices[i]);
        $("#quiz-buttons-div").append(answerButton);
    }
};
function quizLogic(){
    $("quiz-questions-div").append(questions[questionsAnswered].question);
    createAnswerButtons();

    $(.quiz-button).on("click", function(){
        questionsAnswered++;
    })
}