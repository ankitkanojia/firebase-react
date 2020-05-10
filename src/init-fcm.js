import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzasaSyANY0HQrMH06NmXeDFdgdssasoIJQtoUyDuwbiKX0",
  authDomain: "freelancer-project-458f2.firebaseapp.com",
  databaseURL: "https://freelancer-project-458f2.firebaseio.com",
  projectId: "freelancer-project-458f2",
  storageBucket: "freelancer-project-4538f2.appspot.com",
  messagingSenderId: "",
  appId: "1:1053691098913:web:0ba18adba127366f2d135b060"
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

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BFCkN5mESZ8PW1Ll5nL07RsSxtrblgeQtHpCbyWUpnYsmAR_ZS-HjJeZ4WIZg0UHDV2aHd3mAdrg6BfScErJlJ0"
);

export { messaging };
