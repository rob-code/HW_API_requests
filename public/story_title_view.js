var StoryTitleView = function(titleElement){
this.titleElement = titleElement;
};

StoryTitleView.prototype = {

  render: function(stories){

    stories.results.forEach(function(results){
      var title = document.createElement('a');
      title.href = results.url;
      title.innerText = results.title;
      title.className = 'most-popular-title';

      var hr = document.createElement('hr')
      hr.className = "hr"

      this.titleElement.appendChild(title);
      this.titleElement.appendChild(hr);
    

    }.bind(this));

  }



}