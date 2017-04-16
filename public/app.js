//Here's your API Key for the Most Popular and Geographic API: 0ef3cb7d56014cf4949193c6ad33766f

var app = function() {

  var mostPopularStories = new MostPopularStories("https://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/7.json?api-key=0ef3cb7d56014cf4949193c6ad33766f")

  var storyTitleView = new StoryTitleView(document.querySelector('#story-titles'));

  var mainStoryView = new MainStoryView(document.querySelector('#stories'));
  var storyChartAnalysis = new StoryChartAnalysis();

  mostPopularStories.getData(function(stories){

    console.log(stories)

    //mostPopularStories.save(stories);
    storyTitleView.render(stories);
    mainStoryView.render(stories);

    var chartData = {};
    chartData = storyChartAnalysis.getOccurrencesArray(stories);
    console.log(chartData);


  })







}
window.onload = app;