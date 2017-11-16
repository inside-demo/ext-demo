console.log("POPUP: start");

window.addEventListener("unload", OnUnload, false);
window.addEventListener("load", OnLoad, false);

function OnLoad() {
    console.log("POPUP: OnLoad");
    browser.runtime.onMessage.addListener(OnMessage);
    //chrome.runtime.onMessage.addListener(OnMessage);

    browser.runtime.sendMessage({"name": "hi"}, function (response) {
    //chrome.runtime.sendMessage({"name": "hi"}, function (response) {
        if (!response) {
            console.log("Empty response!!!");
            return;
        }
        console.log("BG: response message = " + response.message);
    });
}

function OnUnload() {
    console.log("POPUP: Unload");
    browser.runtime.onMessage.removeListener(OnMessage);
    //chrome.runtime.onMessage.removeListener(OnMessage);
    window.removeEventListener("unload", OnUnload);
    window.removeEventListener("load", OnLoad);
}

function OnMessage(request, sender, sendResponse) {
    console.log("POPUP: OnMessage " + request.name);

    if (request.name === "hi") {
        sendResponse({"message": "Hello from Popup"});
    }
}
