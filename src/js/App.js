import React from 'react';

export default function App() {
    return (
        <div>
            <h1>Hello this is app component</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification("tada...")
            }}>notification</button>
        </div>
    )
}