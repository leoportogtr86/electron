const electron = require('electron')
const sizeOf = require('image-size')
const { app, BrowserWindow, ipcMain } = electron




app.on('ready', () => {


    const janela_principal = new BrowserWindow({

        webPreferences: {

            nodeIntegration: true
        }
    })
    janela_principal.loadURL(`file://${__dirname}/index.html`)



    //file://${__dirname}/index.html



})


ipcMain.on('evento', (e, data) => {

    console.log(data)
})


ipcMain.on('teste', (e, data) => {

    console.log(data)
})
