const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(message) {
            ipcRenderer.send('notify', message);
        }
    },
    batteryApi: {

    },
    filesApi: {

    },
    applicationMode: {
        checkApplicationMode() {
            ipcRenderer.send("appStatus", navigator.onLine ? 'onLine' : 'offLine');
            console.log(navigator.onLine ? 'online' : 'offline');
        }
    }
})