console.log("CS: start");

document.addEventListener('mousedown', function (event) {
	if (event.button === 2) {
		const data = {
			"name": "hi",
			"count": 0
		}

		if (window.getSelection().toString()) {
		    data.count = 1;
		}

		chrome.runtime.sendMessage(data, function (response) {
		//chrome.runtime.sendMessage({"name": "hi"}, function (response) {
		    if (!response) {
		        console.log("Empty response!!!");
		        return;
		    }
		    console.log("CS: response message = " + response.message);
		});
	}
})


