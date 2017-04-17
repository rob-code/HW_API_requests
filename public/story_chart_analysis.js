var StoryChartAnalysis = function(stories){
this.stories = stories;

console.log("here " + this.stories)

}

StoryChartAnalysis.prototype = {

  getOccurrencesArray: function(){

    var storyOccurrences = new Object(null);

    this.stories.results.forEach(function(story){

      var item = story.section;

      if (storyOccurrences[item]){
        storyOccurrences[item]++; 
      }
      else {
        storyOccurrences[item] = 1; 
      }
    });

    console.log(storyOccurrences);

    return storyOccurrences;



  }

}

