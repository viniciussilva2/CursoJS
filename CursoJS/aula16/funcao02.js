function soma(n1, n2) {
  if (n1 == null) {
    return (n1 = 0 + n2);
  } else if (n2 == null) {
    return (n2 = 0 + n1);
  } else {
    return n1 + n2;
  }
}

console.log(soma(5, 100));
