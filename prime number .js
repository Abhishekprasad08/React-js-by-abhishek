function isPrime(number) {
    if (number <= 1) return false;
    let divisor = 2;
    while (divisor < number) {
      if (number % divisor === 0) 
      return false;
      divisor++;
    }
    return true;
  }
  
  console.log(isPrime(8));