

document.addEventListener('DOMContentLoaded', function() {

var notify = document.getElementById("notify");

	notify.addEventListener('click', function() {

		chrome.runtime.sendMessage({update: true}, function(response) {
		});

		window.close();

	});

    
});

