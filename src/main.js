// const { app, BrowserWindow, protocol } = require('electron');
// const path = require('path');

// function createWindow() {
//     const win = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//             nodeIntegration: true,
//             contextIsolation: false,
//             enableRemoteModule: true,
//             webSecurity: false,
//         }
//     });

//     win.loadURL(`file://${path.join(__dirname, '..', 'build', 'index.html')}`);

//     win.webContents.openDevTools(); // Optional: Enable dev tools for debugging

//     win.on('closed', () => {
//         win = null;
//     });
// }


// app.whenReady().then(createWindow);

// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });

// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow();
//     }
// });
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