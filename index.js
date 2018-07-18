const path = require('path');
const electron = require('electron');

const { app , BrowserWindow, Tray } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 500,
        width: 300,
        frame: false,
        resizable: false
    });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);

    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    const iconPath = path.join(__dirname, `./src/assets/${iconName}`);

    if(process.platform === 'linux'){
        process.env.XDG_CURRENT_DESKTOP = 'Unity';
    }

    new Tray(iconPath);
});