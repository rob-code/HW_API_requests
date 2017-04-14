var StoryTitleView = function(titleElement){
this.titleElement = titleElement;
};

StoryTitleView.prototype = {

  render: function(stories){

    stories.results.forEach(function(results){
      var title = document.createElement('div');
      title.innerText = results.title;
      title.className = 'title';

      var hr = document.createElement('hr')
      hr.className = "hr"


      this.titleElement.appendChild(title);
      this.titleElement.appendChild(hr);
    

    }.bind(this));

  }



}