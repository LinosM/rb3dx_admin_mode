// main.js (Main Process)
const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');
var acePath = "";

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');
    //mainWindow.openDevTools();
});

ipcMain.on('setAcePath', (event, message) => {
    acePath = message;
});

ipcMain.on('write-to-file', (event, message) => {
    const wrappedMessage = `{do\n   ${message}\n   {set $dx_command_ran 1}\n}`;
    fs.writeFile(acePath, wrappedMessage, (err) => {
        if (err) {
            event.reply('write-status', 'Error writing to file');
        } else {
            event.reply('write-status', 'Command sent');
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});