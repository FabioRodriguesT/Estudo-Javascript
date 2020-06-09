let numero = document.getElementById('txtn')
let tab = document.getElementById('seltab')
let res = document.querySelector('div#res')
let array = []

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inList(n, list){
  if (list.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumber(numero.value) && !inList(numero.value, array )) {
    array.push(Number(numero.value))
    let item = document.createElement('option')
    item.text = `Valor ${numero.value} adicionado`
    tab.appendChild(item)
    res.innerHTML = '' // Quando adicionar um resultado o res fica vazio.
  } else {
    alert('Valor inválido ou já encontrado na lista.')
  }
  numero.value = '' //esvaziar a caixa de input
  numero.focus() // focar na caixa de input
}

function finalizar(){
  if (array.length == 0) {
    return alert('Adicione valores antes de finalizar!')
  } else {
    let tot = array.length
    let maior = array [0]
    let menor = array [0]
    let soma = 0
    let media = 0
    for(let pos in array) {
      soma += array[pos]
      if (array[pos] > maior){
        maior = array[pos]
      }
      if (array[pos] < menor) {
      menor = array[pos]
      }
    }
    media = soma/tot
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo temos, ${tot} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
    res.innerHTML += `<p> A media dos valores digitados ${media}. </p>`
  }
}
