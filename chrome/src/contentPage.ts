// chrome.runtime.onMessage.addListener((request, sender, respond) => {
//   // console.log('received message....')
//   const handler = new Promise((resolve, reject) => {
//     if (request) {
//       resolve(`Hi from contentPage! You are currently on: ${window.location.href}`);
//     } else {
//       reject('request is empty.');
//     }
//   });
//   handler.then(message => respond(message)).catch(error => respond(error));
//   return true;
// });

chrome.action.onClicked.addListener(function(tab){
  chrome.tabs.create({
      'url': chrome.runtime.getURL("index.html#window")
  });
});