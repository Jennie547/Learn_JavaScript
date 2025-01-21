function add(a, b, c) {
  return (a+b+c);
}

function avarage(a, b, c) {
  const sum = add(a, b, c);
  
  return (sum/3);
}

console.log(avarage(2, 6, 4));