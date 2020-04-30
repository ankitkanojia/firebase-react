//importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
//importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js");

firebase.initializeApp({
 //Your Details
});

self.addEventListener('notificationclick', function (event) {
  console.log("click handler");
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title ASD';
  const notificationOptions = {
    body: 'Background Message body ASD.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
