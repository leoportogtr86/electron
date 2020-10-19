const electron = require('electron')
const { app, Tray } = electron


app.on('ready', () => {

    const tray = new Tray('./electron_logo.png')
    tray.setToolTip('Esta é uma aplicação construída com Electron.')

    tray.on('click', () => {


        console.log('ícone foi clicado')
    })


})