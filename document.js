// const h1 = document.getElementById('titulo')
// const p = document.querySelectorAll('p')
// const textoClass = document.getElementsByClassName('texto')

// console.log(h1)
// console.log(p)
// console.log(textoClass)

// h1.innerText += ' Elemento H1'

// p.forEach((p) => {
//     p.innerText += ' Elementos P'
// })

// for (let i = 0; i < textoClass.length; i++) {
//     textoClass[i].innerText += ' Alteração'
// }

const inputNome = document.getElementById('form-nome')
const checkboxValue = document.querySelectorAll('input[type="checkbox"]')
const radioValue = document.querySelectorAll('input[name="sex"]')
function enviarNome() {
    console.log(checkboxValue)
    checkboxValue.forEach((checkbox) => {
        if (checkbox.checked) {
            console.log(`${checkbox.name}: ${checkbox.value}`)
        }
    })
    radioValue.forEach((radio) => {
        if (radio.checked) {
            console.log(`${radio.name}: ${radio.value}`)
        }
    })
    console.log(`${inputNome.name}: ${inputNome.value}`)
}