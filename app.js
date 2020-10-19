const electron = require('electron')
const sizeOf = require('image-size')
const { app, BrowserWindow, ipcMain, Menu } = electron

//mudamos a variavel de const para let para podermos fazer uma atribuicao a ela mais tarde
let mainWindow
let janela2



app.on('ready', () => {

    mainWindow = new BrowserWindow({

        webPreferences: {

            nodeIntegration: true,
            webSecurity: false
        }
    })

    mainWindow.loadFile('./views/index.html')
    // mainWindow.loadURL('https://truefire.com/robben-ford-guitar-lessons/solo-revolution-diminished-lines/solo-revolution-diminished-lines-introduction/v41955')

    const mainMenu = Menu.buildFromTemplate(menuTemplate)

    Menu.setApplicationMenu(mainMenu)

    mainWindow.on('closed', () => {

        app.quit()
    })
})


ipcMain.on('evento', (e, data) => {

    console.log(data)

    mainWindow.webContents.send('evento_server', data + ' => msg vinda do servidor')

})


ipcMain.on('teste', (e, data) => {

    console.log(data)
})

ipcMain.on('click', (e, data) => {

    console.log(data)
    mainWindow.webContents.send('resposta', data)

})

ipcMain.on('close', (e, data) => {

    janela2.close()
    janela2 = null

    //desalocando memoria
})

ipcMain.on('mensagem', (e, data) => {

    mainWindow.webContents.send('mensagem_main', data)


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
                accelerator: 'ALT+F4',
                click() {

                    app.quit()
                }
            },

            {
                label: "Criar Segunda Janela",
                accelerator: 'CTRL+N',
                click() {

                    janela2 = new BrowserWindow({

                        webPreferences: {

                            nodeIntegration: true,
                            webSecurity: false
                        },

                        width: 500,
                        height: 500,
                        title: 'Janela 2'
                    })
                    janela2.loadFile('./views/janela2.html')
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
        label: 'Run',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'CTRL+R',
                click() {

                    mainWindow.webContents.send('reload', 'reload')
                }
            }
        ]
    },

    {
        label: 'Terminal'
    }


]

if (process.env.NODE_env !== 'production') {

    menuTemplate.push({

        label: 'Dev',
        submenu: [

            {
                label: 'Dev Tools',
                accelerator: 'Ctrl+Shift+I',
                click(item, focusedWindow) {

                    focusedWindow.toggleDevTools()


                }
            },

            {
                role: 'reload'

                //lista de atalhos para acessar as funcionalidades prontas do menu
                //https://www.electronjs.org/docs/api/menu-item#role
            }
        ]
    })

}
