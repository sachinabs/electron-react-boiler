const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');

const isDev = !app.isPackaged

function createWindow() {
    const app = new BrowserWindow({
        width: 1200,
        height: 1200,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    app.loadFile("index.html");
}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}


ipcMain.on('notify', (_, message) => {
    new Notification({ title: "Tada Notification", body: message, }).show();
})
app.whenReady().then(() => {
    console.log("hello");
    createWindow();
})