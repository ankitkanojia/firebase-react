# FireBase Push Notification In React APP.
React is used to display applications in web browsers and to store local state in components, while Firebase is used for authentication, authorization, and managing a realtime database. No backend application with Node. js was needed, and this tutorial was created to show you how.

#  What is Firebase Cloud Messaging?
Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.

Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention. For use cases such as instant messaging, a message can transfer a payload of up to 4KB to a client app.

# How does it work?
An FCM implementation includes two main components for sending and receiving:

A trusted environment such as Cloud Functions for Firebase or an app server on which to build, target, and send messages.
An iOS, Android, or web (JavaScript) client app that receives messages via the corresponding platform-specific transport service.

<p align="center"><img height="400" src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/firebase.jpg" alt="firebase-work" /></p>

# How many type(s) of push notification available?
At its core, there are 4 types of scenarios in which Push Notifications get triggered for all apps.
1. Immediate notifications
These are notifications that get triggered after a certain action/event within the app. For example, on Instagram, whenever you send a direct message to a friend, the friend gets a push notification with your message.

2. Scheduled notifications
These are notifications that get triggered at a certain scheduled time by a batch/cron job. For example, the New York Times may send a push notification at the end of each day summarizing the top articles for that day.

3. Scheduled notifications as a result of an action
These are notifications that get scheduled to be triggered by batch/cron jobs at a certain moment after an action has been performed in the app. For example, on Ritual they may schedule a push notification to be triggered 10 minutes after you ordered a food item.

4. Local notifications
Local notifications are notifications that get triggered by the application locally, without the need for an internet connection. Think of it as running a CRON job locally on your device. Both iOS and Android support the ability to trigger notifications. These types of notifications can either be displayed immediately, or scheduled to be displayed at a later date. A good example is your Alarm Clock app, that sends a local notification at whatever time you set your alarm for.

# Configuration or Project Set-up in firebase console

1. Create your firebase project from firebase console: https://console.firebase.google.com/

2. Register new account or try to logged in with existing accout

3. Once logged-in, You can see firebase console dashboard, Click on Add Project. Then give a project name, select country and click on Create Project. For example, see the below image.
<p align="center"><img src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/GIFs/Add-Project.gif" alt="firebase-work" /></p>

4. As React application is web project, so you need to add web project/application to firebase project, so that whole settings/credentials related to firebase will be configured from that section, see the below image.
<p align="center"><img src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/GIFs/WebApp-Configuration.gif" alt="firebase-work" /></p>

5. Once firebase project is created, you can get your Server_Key from project setting section, Using Server_Key we can able to connect React Web application with firebase application, see the below image 
<p align="center"><img src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/GIFs/Server-Key.gif" alt="firebase-work" /></p>

6. Public_Key you can get from project setting section and then you need to generate that Public_Key, for that see the below image
<p align="center"><img src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/GIFs/Public-Key.gif" alt="firebase-work" /></p>
