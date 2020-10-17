let close = document.getElementById('close')
const electron = require('electron')
const { ipcRenderer } = electron


close.onclick = function () {

    ipcRenderer.send('close', 'close')
    console.log('fechar janela 2')

}