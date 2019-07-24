var maindiv = $("#results");
var plantname = $("#plantname");
var snippet = $("#snippet");
var pic = $("#plantpic");
var care = $("#caretips");
var wikilink = $("#wikilink");
var searchterm = 'Saintpaulia';
//query URL will need to be adjusted later once quiz function is up and running
var queryURL = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchterm + "&limit=1&format=json";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    plantname.text(response[1]);
    snippet.text(response[2]);
    wikilink.attr("href", response[3])
});
// delete later, this is a note for myself - Dan
//https://stackoverflow.com/questions/7185288/how-to-get-wikipedia-content-using-wikipedias-api
