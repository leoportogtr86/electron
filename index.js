const electron = require('electron')

const { app, BrowserWindow } = electron



app.on('ready', () => {


    const janela_principal = new BrowserWindow({})
    janela_principal.loadURL(`file://${__dirname}/index.html`)



})