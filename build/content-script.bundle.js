chrome.runtime.onMessage.addListener(function(e,o,n){e.greeting==="hello"&&n({farewell:"goodbye"})});
