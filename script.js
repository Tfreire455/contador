let btnDiminuir = document.querySelector("#diminuir"),
    btnAumentar = document.querySelector("#aumentar"),
    contador = document.querySelector(".number");

let btnMultiplicar = document.querySelector('#multiplicador'),
    numMultiplicador = document.querySelector('.num-multiplicador'),
    tabuada = document.querySelector('.tabuada');


let numeroContador = 0
btnAumentar.addEventListener('click', () => {
    numeroContador += 1
    contador.textContent = `${numeroContador}`
})

btnDiminuir.addEventListener('click', () => {
    numeroContador -= 1
    contador.textContent = `${numeroContador}`
})

let multiplicacao = 0
let tab = ''

criarTabuada = () => {
    for (let i = 0; i <= 10; i++) {
        multiplicacao = numeroContador * i
        console.log(multiplicacao)
        tabuada.innerHTML += `
        <li> ${numeroContador} X ${i} = ${multiplicacao}</li>`
    }

}

limparTabuada = () => { tabuada.innerHTML = ''; }

btnMultiplicar.addEventListener('click', () => {
    if (tabuada.innerHTML == 0) {
        criarTabuada()
    } else {
        limparTabuada()
    }
})