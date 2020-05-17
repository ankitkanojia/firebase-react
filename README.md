# FireBase Push Notification In React APP.
React front-end application uses the firebase push notifications to display real-time push notification whenever events are fired. firebase provides real-time push notifications or database interactions. Therefor, whenever we required any such kind of functionality we can use firebase service.

#  What is Firebase Cloud Messaging?
Firebase Cloud Messaging Platform (formerly named as GCM) is a no-cost free notification service provide by Google which enables (third-party or cross-platform) app developers to send notifications from GCM (Google Cloud Messaging) servers to their users.

# How does it work?
FCM requires sending and reciever services to share cross-plateform notification service.

An iOS, Android, or any web (JavaScript) client app which will receives messages via transport service from the corresponding platform-specific. A trusted environment is a cloud functions for firebase on which applications are being builded, targeted and help us to snet and recieved message.

<p align="center"><img height="400" src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/firebase.jpg" alt="firebase-work" /></p>

# How many type(s) of push notification available?

There are 4 kinds of scenarios in which Push Notifications get fired or triggered for all cross-platform applications.

1. Immediate or Real-time notifications
As name suggest, notifications get triggered after any certain operation or event or action gets fired. 
For example, Real-time chat with your colleagues

2. Scheduled notifications
Whenever any job or batch or cron sheduled for a certain time, this kind of notifications service is used to acknoledge byh triggering notification.
For Example, Any News update or a scheduled article update schedled on the next day will get acknoledge by using FCM scheduled notification service.

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
