console.log('hello electron')

let enviar = document.getElementById('enviar')
let input = document.getElementById('input')
let info = document.getElementById('info')
const electron = require('electron')

enviar.onclick = (e) => {

    e.preventDefault()
    console.log('arquivo submetido')
    console.log(e)

    console.log(input.files)
    info.innerHTML = input.files[0]


}