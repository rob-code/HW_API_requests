var StoryTitleView = function(titleElement){
this.titleElement = titleElement;
};

StoryTitleView.prototype = {

  render: function(stories){
    console.log(stories)

    stories.results.forEach(function(results){
      var title = document.createElement('div');
      title.innerText = results.title;
      title.className = 'title'
      this.titleElement.appendChild(title);      
    }.bind(this))









  }



}