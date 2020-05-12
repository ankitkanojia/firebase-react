# FireBase Push Notification In React APP.
##### React is used to display applications in web browsers and to store local state in components, while Firebase is used for authentication, authorization, and managing a realtime database. No backend application with Node. js was needed, and this tutorial was created to show you how.

#  What is Firebase Cloud Messaging?
Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.

Using FCM, you can notify a client app that new email or other data is available to sync. You can send notification messages to drive user re-engagement and retention. For use cases such as instant messaging, a message can transfer a payload of up to 4KB to a client app.

# How does it work?
An FCM implementation includes two main components for sending and receiving:

A trusted environment such as Cloud Functions for Firebase or an app server on which to build, target, and send messages.
An iOS, Android, or web (JavaScript) client app that receives messages via the corresponding platform-specific transport service.

<p align="center"><img height="400" src="https://raw.githubusercontent.com/ankitkanojia/firebase-react/development/firebase.jpg" alt="firebase-work" /></p>

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
