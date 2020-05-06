import * as firebase from "firebase/app";
import "firebase/messaging";

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

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions);//This can be used to generate a local notification, without an incoming message. noteOptions has to be an object
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BGVpQlfaGUzrJ4XC_A-EgvMz86P90BFB8CRKt7uG0ngx_ohIqFPNkFWgoAYq89Z_6NKMpujFIQFuFBx8DRcGM74"
);

export { messaging };
