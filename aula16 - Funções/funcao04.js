function fatorial (n) {
  let fat = 1
  for (let c = n; c > 1; c--){
    fat *= c  // fat = fat * c   >>> fatinicial = 1
    //fat = 1 * 5 || fat = 5 >>> fat = 5 * 4 = 20
    //fat = 20 * 3 = 60 >>> fat = 60 * 2 = 120
    //fat = 120 * 1 = 120 >>> fat = 120
    // lembrando que, quando o c = 1, o for se torna falso e nem é executado, portanto a multiplicação só vai até o contador = 2.
    console.log (fat)
  }
  return fat
}

console.log(fatorial(7))

//5! = 5 x 4 x 3 x 2 x 1