const electron = require('electron')
const sizeOf = require('image-size')
const { app, BrowserWindow, ipcMain } = electron


let janela_principal

app.on('ready', () => {


    janela_principal = new BrowserWindow({

        webPreferences: {

            nodeIntegration: true
        }
    })
    janela_principal.loadURL(`file://${__dirname}/index.html`)



    //file://${__dirname}/index.html



})


ipcMain.on('evento', (e, data) => {

    console.log(data)

    janela_principal.webContents.send('evento_server', data + ' => msg vinda do servidor')
})


ipcMain.on('teste', (e, data) => {

    console.log(data)
})
