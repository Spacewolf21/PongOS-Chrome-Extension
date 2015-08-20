var update;

document.addEventListener("DOMContentLoaded",function() {

  var firebaseRef = new Firebase("https://pongos.firebaseio.com");

	firebaseRef.child("occupied").on("value", function(snapshot) {

  		if(snapshot.val() == 1) {
  			chrome.browserAction.setIcon({
  				path: 'red_paddle.png'
  			});
        chrome.browserAction.setPopup({
          popup: "no.html"
        });
  		} else {
  			chrome.browserAction.setIcon({
  				path: 'green_paddle.png'
  			});
        chrome.browserAction.setPopup({
          popup: "yes.html"
        });

        if (update == true) {  
          alert("Ping-Pong room is now open");
          update = false;
        }
  		}
	});

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.update == true) {
      update = true;
    } else {
      update = false;
    }
  })
});