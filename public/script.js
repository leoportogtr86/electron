console.log('hello electron')


const electron = require('electron')
const { ipcRenderer } = electron
let botao = document.getElementById('botao')


ipcRenderer.on('evento_server', (e, data) => {

    console.log(data)
    info.innerHTML = data
})

botao.onclick = function () {

    console.log('click')


    ipcRenderer.send('frontback', 'msg vinda do front para o back')

}

ipcRenderer.on('reload', () => {

    window.location.reload()
})