console.log('hello electron')


const electron = require('electron')
const { ipcRenderer } = electron
let botao = document.getElementById('botao')
let h1 = document.getElementById('h1')
let destino = document.getElementById('destino')


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

h1.onclick = function () {

    ipcRenderer.send('click', {

        data: 'teste'
    })

}

ipcRenderer.on('resposta', (e, data) => {

    console.log(data)
})

ipcRenderer.on('mensagem_main', (e, data) => {

    destino.innerHTML = data


})