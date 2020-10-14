const electron = require('electron')
const sizeOf = require('image-size')
const { app, BrowserWindow, ipcMain, Menu } = electron

//mudamos a variavel de const para let para podermos fazer uma atribuicao a ela mais tarde
let mainWindow

app.on('ready', () => {


    mainWindow = new BrowserWindow({

        webPreferences: {

            nodeIntegration: true,
            webSecurity: false
        }
    })

    mainWindow.loadFile('./index.html')

    const mainMenu = Menu.buildFromTemplate(menuTemplate)

    Menu.setApplicationMenu(mainMenu)
})


ipcMain.on('evento', (e, data) => {

    console.log(data)

    mainWindow.webContents.send('evento_server', data + ' => msg vinda do servidor')

})


ipcMain.on('teste', (e, data) => {

    console.log(data)
})


let menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New File'
            },

            {
                label: 'New Window'
            },

            {
                label: 'Open File'
            },

            {
                label: 'Open Folder'
            },
            {

                label: 'Open Workspace'
            },

            {
                label: 'Exit',
                click() {

                    app.quit()
                }
            }
        ]
    },

    {
        label: 'Edit'
    },

    {
        label: 'Selection'
    },

    {
        label: 'View'
    },

    {
        label: 'Go'
    },

    {
        label: 'Run'
    },

    {
        label: 'Terminal'
    }


]
