chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      var blockSites = ["example.com", "example.net"]; // add your sites to be blocked here
      if (blockSites.indexOf(details.url.split("/")[2]) != -1) {
        return {cancel: true};
      }
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );
  