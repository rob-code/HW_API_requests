var MainStoryView = function(storyElement){
  this.storyElement = storyElement;
};

MainStoryView.prototype = {

render: function(stories){
  console.log(stories)

  stories.results.forEach(function(story){
    var title = document.createElement('div');
    title.innerText = story.title;
    title.className = "story-title";

    var image = document.createElement('img');
    image.src = story.media[0]['media-metadata'][2].url;
    image.className = "story-image";

    var text = document.createElement('div')
    text.innerText = story.abstract; 
    text.className = "story-text";

    var hr = document.createElement('hr')
    hr.className = "hr"

    this.storyElement.appendChild(title);
    this.storyElement.appendChild(image);
    this.storyElement.appendChild(text);
    this.storyElement.appendChild(hr);

  }.bind(this))


}

}
