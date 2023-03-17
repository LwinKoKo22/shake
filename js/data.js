window.onload = function() {
    //create a new instance of shake.js.
    var myShakeEvent = new Shake({threshold: 15});
    myShakeEvent.start();
    
    window.addEventListener('shake', function(){
      document.getElementById('para').innerHTML = "I'm testing";
    }, false)
}