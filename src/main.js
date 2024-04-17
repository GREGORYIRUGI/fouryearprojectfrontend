
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    const isDevPromise = import('electron-is-dev');

    isDevPromise.then(({ default: isDev }) => {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        });

        mainWindow.loadURL(
            isDev
                ? 'http://localhost:3000' // Development server
                : `file://${path.join(__dirname, '../build/index.html')}` // Production build
        );

        mainWindow.on('closed', () => {
            mainWindow = null;
        });
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});




//  start": "react-scripts start",