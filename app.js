$(document).ready(function(){
axios.get('http://polar-temple-8674.herokuapp.com/dogs/api') // your API domain
  .then(function (response) {
    for(var i=0; i<response.data.length; i++){
    	$('.dogs').append('<h1> Dog: ' + response.data[i].name + ' Owner: ' + response.data[i].owner)
    }
  }); 
});