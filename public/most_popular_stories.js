var MostPopularStories = function(url) {
this.url = url;
this.mostPopular = [];
}


MostPopularStories.prototype = {

  getData: function (callback) {
    var request = new XMLHttpRequest();  
    request.open("GET", this.url);
    
    // onload is provided by the browser
    request.onload = function(){                
      if (request.status === 200){
          var jsonString = request.responseText;  //responseText is the method which provides the string 
          this.stories = JSON.parse(jsonString);
          callback(this.stories);
        }
      }.bind(this);   //this anonymous function is going to be run by request 

      request.send();        //trigger the request, all the onload stuff tell JS what to do when the data is returned. ie its run when onload occurs

    }


  }






