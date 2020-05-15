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

# Configuration or Set-up 
### Generate a new key pair
1) Open the <a href="https://console.firebase.google.com/u/0/project/_/settings/cloudmessaging/" target="_blank">Cloud Messaging</a> tab of the Firebase console Settings pane and scroll to the Web configuration section.
2) In the Web Push certificates tab, click Generate Key Pair. The console displays a notice that the key pair was generated, and displays the public key string and date added.

# Send or Text push sample notification using Postman
<table>
    <tr>
        <th>TYPE</th>
        <th>VALUE(s)</th>
    </tr>
    <tr>
        <td>Method</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Endpoint URL</td>
        <td>https://fcm.googleapis.com/fcm/send</td>
    </tr>
    <tr>
        <td colspan="2">Header Parameter(s)</td>
    </tr>
    <tr>
        <td>Authorization</td>
        <td>key=XXXXXXX</td>
    </tr>
    <tr>
        <td>Content-Type</td>
        <td>application/json</td>
    </tr>
    <tr>
        <td>Body Parameter(s)</td>
        <td>
            {
                "notification": {
                "title": "Firebase Notification Title",
                    "body": "Firebase Notification Body",
                    "click_action": "http://localhost:3000",
                    "icon": "http://url-to-an-icon/icon.png"
                },
                "to": "xxxxxxx"
        }</td>
    </tr>
</table>
