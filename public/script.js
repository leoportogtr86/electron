console.log('hello electron')

let enviar = document.getElementById('enviar')
let { path } = document.getElementById('input')
let info = document.getElementById('info').files[0]
const electron = require('electron')
const { ipcRenderer } = electron

enviar.onclick = (e) => {

    e.preventDefault()
    console.log('arquivo submetido')
    console.log(e)

    console.log(path)
    info.innerHTML = path

    ipcRenderer.send('dados_imagem', path)


}