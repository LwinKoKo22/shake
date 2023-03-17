window.onload = function() {
  // Check if DeviceMotionEvent is supported
if (window.DeviceMotionEvent) {
  // Add a listener for the device motion event
  window.addEventListener('devicemotion', shakeEventReceived, false);
}

// Define the shakeEventReceived function
function shakeEventReceived(event) {
  // Check if the Shake.js library is loaded
  if (typeof Shake !== 'undefined') {
    // Create a new Shake instance
    const shake = new Shake({threshold: 15});

    // Start listening for shake events
    shake.start();

    // Add a listener for the shake event
    window.addEventListener('shake', shakeEventDidOccur, false);

    // Define the shakeEventDidOccur function
    function shakeEventDidOccur() {
      // Do something in response to the shake event
      document.getElementById('para').innerHTML = "I'm still trying now";
    }
  }
}
}