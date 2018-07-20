const electron = require('electron');
const {BrowserWindow} = electron;

class MainWindow extends BrowserWindow{
    constructor(path){
        super({
            height: 500,
            width: 300,
            frame: false,
            resizable: false,
            show: false,
            webPreferences: {
                backgroundThrottling: false
            }
        });

        this.loadURL(path)
        
        this.on('blur', this.onBlur.bind(this));
    }

    onBlur(){
        this.hide();
    }
}

module.exports = MainWindow;