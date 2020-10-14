const electron = require('electron')
const sizeOf = require('image-size')
const { app, BrowserWindow, ipcMain } = electron

//mudamos a variavel de const para let para podermos fazer uma atribuicao a ela mais tarde
let mainWindow

app.on('ready', () => {


    mainWindow = new BrowserWindow({

        webPreferences: {

            nodeIntegration: true
        }
    })

    mainWindow.loadFile('./index.html')







})


ipcMain.on('evento', (e, data) => {

    console.log(data)

    mainWindow.webContents.send('evento_server', data + ' => msg vinda do servidor')
})


ipcMain.on('teste', (e, data) => {

    console.log(data)
})
