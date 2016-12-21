
$(document).ready(function() {

   
   $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC",
     
    
     
      function(response) {
        console.log(response);
        for(var i = 0; i<5; i++){
        $("#gif").append("<img src=" + response.data[i].images.fixed_width_downsampled.url + ">");}
      });
      
      var inputValue = $("#name").value
      
      $("#button").click(function(){
          console.log("https://api.giphy.com/v1/gifs/search?q"+inputValue+"&api_key=dc6zaTOxFJmzC");
      });
      
  });
