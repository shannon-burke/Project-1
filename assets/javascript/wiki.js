queryURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Craig%20Noone&format=json";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});