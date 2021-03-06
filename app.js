const electron = require('electron')
const sizeOf = require('image-size')
const { app, BrowserWindow, ipcMain, Menu, Tray } = electron

//mudamos a variavel de const para let para podermos fazer uma atribuicao a ela mais tarde
let mainWindow
let janela2
let janela3



app.on('ready', () => {

    const tray = new Tray('./public/assets/img/charger.png')
    tray.setToolTip('Aplicação criada com electron js')


    tray.on('click', () => {

        console.log('Ícone de bandeja clicado')


    })

    mainWindow = new BrowserWindow({

        webPreferences: {

            nodeIntegration: true,
            webSecurity: false
        }
    })

    mainWindow.loadFile('./views/index.html')
    // mainWindow.loadURL('https://truefire.com/robben-ford-guitar-lessons/solo-revolution-diminished-lines/solo-revolution-diminished-lines-introduction/v41955')

    const mainMenu = Menu.buildFromTemplate(menuTemplate)
    const contextMenu = Menu.buildFromTemplate(bandejaTemplate)

    tray.setContextMenu(contextMenu)

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



let bandejaTemplate = [

    {

        label: 'Nova Janela',
        click() {

            console.log('Você clicou no label 1')
            janela3 = new BrowserWindow({

                width: 400,
                height: 400,
                frame: false,
                resizable: false,
                show: false
            })
            janela3.loadFile('./views/janela3.html')

        }
    },
    {

        label: 'Janela Visível',
        click() {

            console.log('Você clicou no label 2')
            janela3.show()

        }
    },
    {

        label: 'Label 3',
        click() {

            console.log('Você clicou no label 3')
        }
    },
    {

        label: 'Label 4',
        click() {

            console.log('Você clicou no label 4')
        }
    }
]



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

                    if (process.platform !== 'darwin') {

                        janela2.setMenu(null)


                    }
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
