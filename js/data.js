window.onload = function() {
  //create a new instance of shake.js.
  var myShakeEvent = new Shake({
      threshold: 15
  });
  // start listening to device motion
  myShakeEvent.start();
  // register a shake event
  window.addEventListener('shake', shakeEventDidOccur, false);
  //shake event callback
  function shakeEventDidOccur () {
      //put your own code here etc.
    add();
      //alert('Shake!');
  }

  $('span').bind( "touchstart", function(e){add();} );
};
var image_array = [
  "https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg?w=2000",
  "https://img.freepik.com/free-vector/cute-cool-baby-holding-teddy-bear-doll-cartoon-vector-icon-illustration-people-holiday-isolated_138676-5356.jpg?w=2000",
  "https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000",
  "https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg?w=2000"
];
var i = 0;
add = function(){ 
  if(i < image_array.length){
      document.getElementById('image').src = image_array[i];
  }
  i++;
}