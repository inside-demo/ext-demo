console.log("BG: start");

window.addEventListener("load", OnLoad, true);

function OnLoad() {
    console.log("BG: OnLoad");
    chrome.runtime.onMessage.addListener(BGOnMessage);
    //chrome.runtime.onMessage.addListener(BGOnMessage);
}

function BGOnMessage(request, sender, sendResponse) {
    console.log("BG: BGOnMessage " + request.name);

    if (request.name === "hi") {
    	chrome.contextMenus.removeAll(() => {
    	  chrome.contextMenus.create({
    	    id: 'one',
    	    title: `one`,
    	    contexts: ['all']
    	  });

    	  chrome.contextMenus.create({
    	    id: 'two',
    	    title: `two`,
    	    contexts: ['all']
    	  });
    	  console.log(request.count);

    	  if (request.count) {
	    	  chrome.contextMenus.create({
	    	    id: 'three',
	    	    title: `three`,
	    	    contexts: ['all']
	    	  });
    	  }
    	});

        sendResponse({"message": "Hello from BG"});
    }
}
