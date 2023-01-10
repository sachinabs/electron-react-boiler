import React from 'react';

export default function App() {

    console.log(navigator.onLine ? 'online' : 'offline');
    const appStatus = navigator.onLine ? true : false;
    return (
        <div>
            <h1>Hello this is app component</h1>
            {appStatus ? <h1> yep</h1> : <h1>Nope</h1>}
            <button onClick={() => {
                electron.notificationApi.sendNotification("tada...")
            }}>notification</button>

        </div>
    )
}