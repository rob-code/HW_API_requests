var MainStoryView = function(storyElement){
  this.storyElement = storyElement;
};

MainStoryView.prototype = {

render: function(stories){



  stories.results.forEach(function(story){

    var title = document.createElement('a');
    title.innerText = story.title;
    title.href = story.url;
    title.className = "story-title";

    var info = document.createElement('div');
    info.innerText = "Section: " + story.section + " | " + story.byline + " | " + story.published_date;
    info.className = "story-info";

    //make the image clickable
    var imageLink = document.createElement('a');
    imageLink.href = story.url;
    var image = document.createElement('img');

    if(story.media[0]){
        image.src = story.media[0]['media-metadata'][2].url;
        
    }


    console.log(image.src)

    image.className = "story-image";
    imageLink.appendChild(image);

    var text = document.createElement('div');
    text.innerText = story.abstract; 
    text.className = "story-text";

    var hr = document.createElement('hr');
    hr.className = "hr";

    this.storyElement.appendChild(title);
    this.storyElement.appendChild(info);
    this.storyElement.appendChild(imageLink);
    this.storyElement.appendChild(text);
    this.storyElement.appendChild(hr);

  }.bind(this))


}

}
