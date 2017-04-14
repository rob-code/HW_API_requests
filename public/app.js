//Here's your API Key for the Most Popular and Geographic API: 0ef3cb7d56014cf4949193c6ad33766f

var app = function() {

var mostPopularStories = new MostPopularStories("https://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/7.json?api-key=0ef3cb7d56014cf4949193c6ad33766f")

mostPopularStories.getData(function(stories){

console.log(stories)





})





}
window.onload = app;