# FireBase Push Notification In React APP.
##### React is used to display applications in web browsers and to store local state in components, while Firebase is used for authentication, authorization, and managing a realtime database. No backend application with Node. js was needed, and this tutorial was created to show you how.


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
