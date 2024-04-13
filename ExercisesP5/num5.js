
function sumAll(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    // 0  = 0+1 => 1
    // 1  = 1+2 => 3 
    }
    return total; // total =3
  }

console.log(sumAll(1, 2)); // Output: 3
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15