chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file:"jquery-1.9.0.js"});
    chrome.tabs.executeScript(null, {file:"onclickIcon_contentscript.js"});
});
