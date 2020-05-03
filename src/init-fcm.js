import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  messagingSenderId: "893833013962"
  // apiKey: "AIzaSyDayZmQIhMynkemx_-Lxb2--icCpPWHIqM",
  // authDomain: "papresupplymobileapp.firebaseapp.com",
  // databaseURL: "https://papresupplymobileapp.firebaseio.com",
  // projectId: "papresupplymobileapp",
  // storageBucket: "papresupplymobileapp.appspot.com",
  // messagingSenderId: "893833013962",
  // appId: "1:893833013962:web:098f72a599d0b34d936233",
  // measurementId: "G-7NWS5F0PKC"
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
