function sleep(second) {
    const time = +new Date();

    while(+new Date() - time < second * 1000 ) {
        console.log("keep the stack")
    }
}

self.addEventListener('message', function(e) {
    // Send the message back.
    sleep(10)
    self.postMessage('You said: ' + e.data);
  }, false);