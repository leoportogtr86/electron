const electron = require('electron')
const sizeOf = require('image-size')
const { app, BrowserWindow } = electron




app.on('ready', () => {


    const janela_principal = new BrowserWindow({

        webPreferences: {

            nodeIntegration: true
        }
    })
    janela_principal.loadURL(`file://${__dirname}/index.html`)



    //file://${__dirname}/index.html





})