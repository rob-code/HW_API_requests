var MostPopularStories = function(url) {
this.url = url;
this.stories = [];
}


MostPopularStories.prototype = {

  getData: function (callback) {
    
    //this.stories = JSON.parse(localStorage.getItem('storyStore')) || [];
    //callback(this.stories)

    var request = new XMLHttpRequest();  
    request.open("GET", this.url);
  
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
      localStorage.setItem('storyStore', JSON.stringify(stories));
    }


     // function check() {
      //     var z, xml = null;
      //     xml = new XMLHttpRequest();
       //     xml.open("get", who, false);
       //     try {
       //         xml.send(null);
       //     } catch(z) {
       //         alert("Network failure");
      //         return;
       //     }
       //     if ((xml.status >= 200 && xml.status <= 300) || xml.status == 304) {
       //         var hi = xml.responseText;
       //     } else {
      //         alert("No Internet Connection! You will have to enter information by hand");
      //     }
      // }
     






}