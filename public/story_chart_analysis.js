var StoryChartAnalysis = function(){

}

StoryChartAnalysis.prototype = {

  getOccurrencesArray: function(stories){

    var storyOccurrences = new Object(null);

    stories.results.forEach(function(story){

      var item = story.section;

      if (storyOccurrences[item]){
        storyOccurrences[item]++; 
      }
      else {
        storyOccurrences[item] = 1; 
      }
    });

    return storyOccurrences;

  }

}

