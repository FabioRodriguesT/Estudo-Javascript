function tabuada() {
  let number = document.getElementById('txtnum')
  let tab = document.getElementById('seltab')
  if (number.value.length == 0){
    alert('Por favor, digite um número!')
  } else {
    let num = Number(number.value)
    tab.innerHTML = ''
    for (let c = 1; c <= 10; c++){
    let item = document.createElement('option')
    item.text = `${num} x ${c} = ${num * c}`
    item.value = `tab ${c}`
    tab.appendChild(item)
    }
  }
} 