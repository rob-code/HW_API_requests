var MostPopularStories = function(url) {
this.url = url;
this.stories = [];
}


MostPopularStories.prototype = {

  getData: function (callback) {
    var request = new XMLHttpRequest();  
    request.open("GET", this.url);
    
//    http://stackoverflow.com/questions/12879606/xmlhttprequest-test-for-connection-instead-of-sendnull-failure


    request.onload = function(){                
      if (request.status === 200){
          var jsonString = request.responseText; 
          this.stories = JSON.parse(jsonString);
          callback(this.stories);
        }
      }.bind(this); 

      request.send();        //trigger the request, all the onload stuff tell JS what to do when the data is returned. ie its run when onload occurs

    },

    save: function(stories){
      //var state = JSON.parse(localStorage.getItem('storyStore')) || [];
      //state.push(stories);
      localStorage.setItem('storyStore', JSON.stringify(stories));
    }




  }






