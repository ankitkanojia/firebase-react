//importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
// importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js");
firebase.initializeApp({
  apiKey: "AfergIzagaSwfwwyDayZmQIwefhtrMynkdfaeamrthx_-Lxb2--icrtCpPWHIqrwthM",
  authDomain: "aaa.firebaseapp.com",
  databaseURL: "https://as.firebaseio.com",
  projectId: "ass",
  storageBucket: "asa.appspot.com",
  messagingSenderId: "893283233301396232342",
  appId: "1:8938330423423413962:web:098f72a599d0b34d936223424233",
  measurementId: "G-7NWS5F0PKC"
});

self.addEventListener('notificationclick', function (event) {
  console.log("click handler");
  console.log(event);
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
