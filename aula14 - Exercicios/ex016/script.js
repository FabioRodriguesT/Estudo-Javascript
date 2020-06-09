function contar() {
  let init = document.getElementById('txtinicio')
  let end = document.getElementById('txtfim')
  let pass = document.getElementById('txtpasso')
  let res = document.getElementById('res')

  if (init.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
    res.innerHTML = '[ERRO] Faltam dados!, impossível contar'
  } else {
    res.innerHTML = 'Contado: <br>'
    let i = Number(init.value)
    let e = Number(end.value)
    let p = Number(pass.value)
    if (p <= 0){
      window.alert(`Passo inválido! Considerando PASSO 1`)
      p = 1
    }
    if(i < e) {
      //contagem crescente
      for (let c = i; c <= e ; c += p) {
      res.innerHTML += ` ${c} \u{1F449}`
      }
    } else {
      //contagem decrescente
      for (let c = i; c >= e; c -= p){
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
