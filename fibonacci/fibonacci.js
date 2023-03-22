const numero = Number(prompt('Digite o número'));



let a = 0;
let b = 1;
let fib = b;


function checkFibo(numero){
    console.log(typeof numero)
    while (fib < numero) {
        fib = a + b;
        a = b;
        b = fib;
      }
      
      if (fib === numero) {
        return alert(`${numero} Pertence à sequência de Fibonacci.`);
      } else {
        return alert(`${numero} Não pertence à sequência de Fibonacci.`);
      }
}

checkFibo(numero);

