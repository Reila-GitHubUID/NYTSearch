let apiKey = "";
let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + question + "&api-key=" + apiKey;

$.ajax ({
    url,
    method: "GET"
}).then (function(response) {
    console.get(response);
});
