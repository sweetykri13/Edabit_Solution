const calculateExponent = (a, b) => {
    let result = 1;
  
    for (let i = 0; i < b; i++) {
      result *= a;
    }
  
    return result;
  };
  
  console.log(calculateExponent(5, 5));
  