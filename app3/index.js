const electron = require('electron')
const { app, Tray, Menu, BrowserWindow } = electron

let mainWindow

app.on('ready', () => {

    // const tray = new Tray('./electron_logo.png')
    // tray.setToolTip('Esta é uma aplicação construída com Electron.')

    // tray.on('click', () => {


    //     console.log('ícone foi clicado')


    // })

    // const contextMenu = Menu.buildFromTemplate(menuTemplate)
    // tray.setContextMenu(contextMenu)


    mainWindow = new BrowserWindow({})

    mainWindow.loadFile(`file://${__dirname}/index.html`)


})

// const menuTemplate = [

//     {

//         label: 'Label 1',
//         click() {

//             console.log('Você clicou na opção 1')
//         }
//     },
//     {

//         label: 'Label 2',
//         click() {

//             console.log('Você clicou na opção 2')
//         }
//     },
//     {

//         label: 'Label 3',
//         click() {

//             console.log('Você clicou na opção 3')
//         }
//     }
// ]