chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "showText") {
        alert(request.text); // replace with your preferred method of showing text
      }
    }
  );
  