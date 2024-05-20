const form = document.querySelector('#form')

form.addEventListener('submit', contar)
function contar(e){
    e.preventDefault()
    const passo = parseInt(document.querySelector('#passo').value)
    const maxN = parseInt(document.querySelector('#maxN').value)
    const res = document.querySelector('#result_box')

    const array = Array(Math.floor(maxN/passo))
    const contador = [...array.keys()].map(i => (i+1)*passo)

    res.innerText = ''
    contador.forEach(element => {
        res.innerText += ` ${element}...`
        return res
    })
}