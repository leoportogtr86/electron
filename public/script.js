console.log('hello electron')

let enviar = document.getElementById('enviar')
let input = document.getElementById('input')
let info = document.getElementById('info')
const electron = require('electron')
const { ipcRenderer } = electron
let btn = document.getElementById('btn')

btn.onclick = function () {

    ipcRenderer.send('evento', { msg: 'msg de evento' })
    console.log('click')

}

enviar.onclick = (e) => {

    e.preventDefault()
    console.log('arquivo submetido')
    console.log(e)



    ipcRenderer.send('teste', { teste: "teste de envio de evento" })


}