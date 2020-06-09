//Outro modo alternativo para função fatorial
//Isso chama RECURSIVIDADE
function fatorial (n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorial(n-1)
/*
    n! = n x (n-1)!
    5! = 5 * (5-1) = 5 * 4 = 20
    4! = 4 * (4-1) = 4 * 3 = 12
    3! = 3 * (3-1) = 3 * 2 = 6
    2! = 2 * (2-1) = 2 * 1 = 2
    1! = 1
    n * fatorial(n-1)
    n * ((n-1) * ((n-1) fatorial(n-1))) 
    5 * (4 * (3 * (2 * fatorial(2-1))))

    fatorial (2-1) = 1
*/
  }

}

console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1 é igual a 5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/