import React from 'react';

export default function App() {

    console.log(navigator.onLine ? 'online' : 'offline');
    const appStatus = navigator.onLine ? true : false;
    return (
        <div>
            <center>
                <h1>Atre Health tec </h1>
                <h4></h4>
                {appStatus ? <h1> You are Online. 📩</h1> : <h1>Check the Internet connection. 📶</h1>}
                <button onClick={() => {
                    electron.notificationApi.sendNotification("Hy this is system notification")
                }}>notification</button>
            </center>

        </div>
    )
}