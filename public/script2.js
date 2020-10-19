let close = document.getElementById('close')
const electron = require('electron')
const { ipcRenderer } = electron
let enviar = document.getElementById('enviar')
let msg = document.getElementById('msg')


close.onclick = function () {

    ipcRenderer.send('close', 'close')
    console.log('fechar janela 2')

}

enviar.onclick = function () {

    ipcRenderer.send('mensagem', msg.value)
    ipcRenderer.send('close', 'close')

}