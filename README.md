# Firebase Push Notification In React APP.
React front-end application uses the firebase push notifications to display real-time push notification whenever events are fired. firebase provides real-time push notifications or database interactions. Therefore, whenever we required any such kind of functionality we can use firebase service.

#  What is Firebase Cloud Messaging?
Firebase Cloud Messaging Platform (formerly named as GCM) is a no-cost free notification service provided by Google which enables (third-party or cross-platform) app developers to send notifications from GCM (Google Cloud Messaging) servers to their users.

# How does it work?
FCM requires sending and receiver services to share cross-platform notification service.

An iOS, Android, or any web (JavaScript) client app which will receive messages via transport service from the corresponding platform-specific. A trusted environment is a cloud function for firebase on which applications are being built, targeted, and help us to sent and received messages.

<p align="center"><img height="400" src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/firebase.jpg" alt="firebase-work" /></p>

# How many type(s) of push notification available?

There are 4 kinds of scenarios in which Push Notifications get fired or triggered for all cross-platform applications.

1. Immediate or Real-time notifications
As the name suggests, notifications get triggered after any certain operation or event or action gets fired. 
For example, Real-time chat with your colleagues

2. Scheduled notifications
Whenever any job or batch or CRON scheduled for a certain time, this kind of notifications service is used to acknowledge by triggering a notification.
For Example, Any News update or a scheduled article update scheduled on the next day will get acknowledge by using FCM scheduled notification service.

3. Scheduled notifications as a result of an action
Whenever any action triggered using a scheduled CRON job, after that action triggered in case of user wanted to fire notification after a certain time to be fired, then this kind of notification service is used.
For Example, John wanted to trigger push notification after 5 min once his salary credited to account.

4. Local notifications
As the name suggested, this is the notifications which work as scheduler JOB in the local device, like in case of you wanted fire local notifications, then firebase will set up a CRON job in your local device and notifications are being triggered when any certain actions are fired without any help of internet connection.
For Example, Any reminder notification, for that we don't required any internet connection, so using firebase service we can set a CRON job in the local device so that we can fire a push notification on the desired time as a reminder.

# Configuration or Project Set-up in firebase console

1. Create your firebase project from firebase console: https://console.firebase.google.com/

2. Register a new account or try to log in with existing account

3. Once logged-in, You can see firebase console dashboard, Click on Add Project. Then give a project name, select country and click on Create Project. For example, see the below image.
<p align="center"><img src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/GIFs/Add-Project.gif" alt="firebase-work" /></p>

4. As React application is web project, so you need to add web project/application to firebase project, so that whole settings/credentials related to firebase will be configured from that section, see the below image.
<p align="center"><img src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/GIFs/WebApp-Configuration.gif" alt="firebase-work" /></p>

5. Once firebase project is created, you can get your Server_Key from project setting section, Using Server_Key we can able to connect React Web application with firebase application, see the below image 
<p align="center"><img src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/GIFs/Server-Key.gif" alt="firebase-work" /></p>

6. Public_Key you can get from project setting section and then you need to generate that Public_Key, for that see the below image
<p align="center"><img src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/GIFs/Public-Key.gif" alt="firebase-work" /></p>
