const { app, BrowserWindow } = require('electron');



function createWindow() {
    const app = new BrowserWindow({
        width: 1200,
        height: 1200,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })
    app.loadFile("index.html");
}

app.whenReady().then(() => {
    console.log("hello");
    createWindow();
})