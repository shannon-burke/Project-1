var questionsAnswered = 0
var quiz = $("#quiz-buttons-div")

var questions = [{
    question: "How much do you plan on taking care of the plant?",
    answers: ["everyday", "once to a few times a week", "hardly ever"],
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

}]
var userPlants = [];
var waterConsumption = 0;
var utility = 0;
var size = 0;
var sunlight = 0;

var plants = [{
    name: "African Violet",
    waterConsumption: 3,
    utility: 2,
    size: 1,
    sunlight: 1
},
{
    name: "Aloe",
    waterConsumption: 1,
    utility: 3,
    size: 2,
    sunlight: 2
},
{
    name: "Bamboo",
    waterConsumption: 1,
    utility: 1,
    size: 1,
    sunlight: 1
},
{
    name: "Bonsai",
    waterConsumption: 3,
    utility: 1,
    size: 1,
    sunlight: 3
},
{
    name: "Fig Tree",
    waterConsumption: 2,
    utility: 1,
    size: 3,
    sunlight: 3
},
{
    name: "Herb Plant",
    waterConsumption: 3,
    utility: 3,
    size: 1,
    sunlight: 3
},
{
    name: "Money Tree",
    waterConsumption: 1,
    utility: 1,
    size: 2,
    sunlight: 3
},
{
    name: "Orchid",
    waterConsumption: 2,
    utility: 2,
    size: 2,
    sunlight: 1
},
{
    name: "Palm Tree",
    waterConsumption: 2,
    utility: 1,
    size: 3,
    sunlight: 1
},
{
    name: "Peace Lily",
    waterConsumption: 3,
    utility: 2,
    size: 2,
    sunlight: 1
},
{
    name: "Philodendron",
    waterConsumption: 2,
    utility: 1,
    size: 2,
    sunlight: 2
},
{
    name: "Pothos",
    waterConsumption: 2,
    utility: 1,
    size: 2,
    sunlight: 3
},
{
    name: "Rubber Tree",
    waterConsumption: 2,
    utility: 1,
    size: 3,
    sunlight: 2
},
{
    name: "Snake Plant",
    waterConsumption: 1,
    utility: 1,
    size: 2,
    sunlight: 1
},
{
    name: "Succulent",
    waterConsumption: 1,
    utility: 2,
    size: 1,
    sunlight: 2
},
{
    name: "Schefflera",
    waterConsumption: 2,
    utility: 1,
    size: 2,
    sunlight: 2
},
{
    name: "Avacado Tree",
    waterConsumption: 2,
    utility: 3,
    size: 2,
    sunlight: 3
},
{
    name: "Lavender",
    waterConsumption: 1,
    utility: 2,
    size: 1,
    sunlight: 3
},
{
    name: "Ficus",
    waterConsumption: 2,
    utility: 2,
    size: 3,
    sunlight: 3
},
{
    name: "Lettuce",
    waterConsumption: 2,
    utility: 3,
    size: 1,
    sunlight: 3
},
{
    name: "Fake Plant",
    waterConsumption: 1,
    utility: 1,
    size: 1,
    sunlight: 1
},
]


//function createAnswerButtons() {
//    for (var i = 0; i < questions[questionsAnswered].choices.length; i++) {
//        var answerButton = $("<button>");
//        answerButton.text(questions[questionsAnswered].choices[i]);
//        answerButton.addClass("btn btn-secondary quiz-button");
//        answerButton.attr("value", questions[questionsAnswered].values[i]);
//        answerButton.attr("answerName", questions[questionsAnswered].choices[i]);
//        $("#quiz-buttons-div").append(answerButton);
//    }
//};
function quizLogic() {
    //$("#quiz-questions-div").append(questions[questionsAnswered].question);
    //createAnswerButtons();


};
$(".q1").on("click", function () {
    waterConsumption = this.getAttribute("data");
    console.log(waterConsumption);
    $(".q1").hide();
});
$(".q2").on("click", function () {
    utility = this.getAttribute("data");
    console.log(utility);
    $(".q2").hide();
});
$(".q3").on("click", function () {
    size = this.getAttribute("data");
    console.log(size);
    $(".q3").hide();
});
$(".q4").on("click", function () {
    sunlight = this.getAttribute("data");
    console.log(sunlight);
    $(".q4").hide();
});

$("#submit").on("click", function () {
    for (var i = 0; i < plants.length; i++) {
        if ((o => o[i].size === size) && (o => o[i].sunlight === sunlight) && (o => o[i].utility === utility) && (o => o[i].waterConsumption === waterConsumption))
            userPlants.push(plants);
        //Currently unable to filter out items in array of objects that do not apply - will need to continue working on this function
    }
    console.log(userPlants);
});