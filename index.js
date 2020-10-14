const electron = require('electron')

const { app } = electron


app.on('ready', () => {

    console.log('aplicação electron rodando.')
})