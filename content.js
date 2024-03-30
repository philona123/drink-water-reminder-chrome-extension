chrome.runtime.onMessage.addListener(message => {
    if (message.action === 'remind') {
      alert('Remember to drink water!');
    }
  });
  