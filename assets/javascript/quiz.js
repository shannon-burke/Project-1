var resultsDiv = $("#results");
var plantname = $("<div>").attr("class", "plant-name");
var pic = $("<img>").attr("class", "plant-image");
var plantInfo = $("<div>").attr("class", "plant-info");
var wikilink = $("<a>").attr("class", "plant-link");
var resultSRC = [];
var recomendations = [];
//variables for wikipedia API


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
    sunlight: 1,
    photo: "assets/images/plant-photos/african-violet.jpg"
},
{
    name: "Aloe",
    waterConsumption: 1,
    utility: 3,
    size: 2,
    sunlight: 2,
    photo: "assets/images/plant-photos/aloe-vera.jpg"
},
{
    name: "Avacado Tree",
    waterConsumption: 2,
    utility: 3,
    size: 2,
    sunlight: 3,
    photo: "assets/images/plant-photos/avocado-tree.jpg"
},
{
    name: "Bamboo",
    waterConsumption: 1,
    utility: 1,
    size: 1,
    sunlight: 1,
    photo: "assets/images/plant-photos/bamboo.jpg"
},
{
    name: "Bonsai",
    waterConsumption: 3,
    utility: 1,
    size: 1,
    sunlight: 3,
    photo: "assets/images/plant-photos/bonsai.jpg"
},
{
    name: "Dwarf lemon",
    waterConsumption: 2,
    utility: 1,
    size: 3,
    sunlight: 3,
    photo: "assets/images/plant-photos/dwarf-lemon.jpg"
},
{
    name: "Artificial Plant",
    waterConsumption: 1,
    utility: 1,
    size: 1,
    sunlight: 1,
    photo: "assets/images/plant-photos/fake-plant.jpg"
},
{
    name: "Ficus",
    waterConsumption: 2,
    utility: 2,
    size: 3,
    sunlight: 3,
    photo: "assets/images/plant-photos/ficus-benjamina.webp"
},
{
    name: "Fiddle leaf fig",
    waterConsumption: 2,
    utility: 1,
    size: 3,
    sunlight: 3,
    photo: "assets/images/plant-photos/fiddle-leaf-fig.webp"
},
{
    name: "Herbs",
    waterConsumption: 3,
    utility: 3,
    size: 1,
    sunlight: 3,
    photo: "assets/images/plant-photos/herbs.jpg"
},
{
    name: "Lavender",
    waterConsumption: 1,
    utility: 2,
    size: 1,
    sunlight: 3,
    photo: "assets/images/plant-photos/lavender.jpg"
},
{
    name: "Lettuce",
    waterConsumption: 2,
    utility: 3,
    size: 1,
    sunlight: 3,
    photo: "assets/images/plant-photos/lettuce.jpg"
},
{
    name: "Money Tree",
    waterConsumption: 1,
    utility: 1,
    size: 2,
    sunlight: 3,
    photo: "assets/images/plant-photos/money-tree.jpg"
},
{
    name: "Orchid",
    waterConsumption: 2,
    utility: 2,
    size: 2,
    sunlight: 1,
    photo: "assets/images/plant-photos/orchid.jpg"
},
{
    name: "Palm Tree",
    waterConsumption: 2,
    utility: 1,
    size: 3,
    sunlight: 1,
    photo: "assets/images/plant-photos/palm-tree.webp"
},
{
    name: "Peace Lily",
    waterConsumption: 3,
    utility: 2,
    size: 2,
    sunlight: 1,
    photo: "assets/images/plant-photos/peace-lily.webp"
},
{
    name: "Pothos",
    waterConsumption: 2,
    utility: 1,
    size: 2,
    sunlight: 3,
    photo: "assets/images/plant-photos/pothos.jpg"
},
{
    name: "Rubber Tree",
    waterConsumption: 2,
    utility: 1,
    size: 3,
    sunlight: 2,
    photo: "assets/images/plant-photos/rubber-tree.jpg"
},
{
    name: "Schefflera",
    waterConsumption: 2,
    utility: 1,
    size: 2,
    sunlight: 2,
    photo: "assets/images/plant-photos/schefflera.jpg"
},
{
    name: "Snake Plant",
    waterConsumption: 1,
    utility: 1,
    size: 2,
    sunlight: 1,
    photo: "assets/images/plant-photos/snake-plant.jpg"
},
{
    name: "Philodendron",
    waterConsumption: 2,
    utility: 1,
    size: 2,
    sunlight: 2,
    photo: "assets/images/plant-photos/split-leaf-philodendron.webp"
},
{
    name: "Succulent",
    waterConsumption: 1,
    utility: 2,
    size: 1,
    sunlight: 2,
    photo: "assets/images/plant-photos/succulent.jpg"
},
]


function quizLogic() {

};
$(".q1").on("click", function () {
    waterConsumption = this.getAttribute("data");
    console.log(waterConsumption);
    $(".q1").hide();
    $("#question-1-div").hide();
});
$(".q2").on("click", function () {
    utility = this.getAttribute("data");
    console.log(utility);
    $(".q2").hide();
    $("#question-2-div").hide();
});
$(".q3").on("click", function () {
    size = this.getAttribute("data");
    console.log(size);
    $(".q3").hide();
    $("#question-3-div").hide();
});
$(".q4").on("click", function () {
    sunlight = this.getAttribute("data");
    console.log(sunlight);
    $(".q4").hide();
    $("#question-4-div").hide();

});

$("#submit").on("click", function () {
    for (var i = 0; i < plants.length; i++) {
        if ((plants[i].size == size) && (plants[i].sunlight == sunlight) && (plants[i].utility == utility) && (plants[i].waterConsumption == waterConsumption)) {
            userPlants.push(plants[i]);

        }
    }

    // old method $(".container").append(resultsDiv).append(plantname).append(snippet).append(wikilink).append(pic).append(care);
    $("#quiz").hide();
    for (var i = 0; i < userPlants.length; i++) {
        var searchterm = userPlants[i].name;
        var queryURL = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchterm + "&limit=1&format=json";

        resultSRC.push(userPlants[i].photo);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            recomendations.push(response);
            console.log(recomendations);
            for (var j = 0; j < recomendations.length; j++) {
                resultsDiv.append($(".col-md-2")).append(plantname).append(pic).append(plantInfo).append(wikilink);
                plantname.text(response[1]);
                plantInfo.text(response[2]);
                wikilink.attr("href", response[3]);
                wikilink.text(response[3]);
                pic.attr("src", resultSRC[j]);
            }

        });

    }

});
