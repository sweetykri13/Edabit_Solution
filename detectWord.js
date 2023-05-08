function extractLowerCase(str) {
    let lowerCaseStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'a' && str[i] <= 'z') {
        lowerCaseStr += str[i];
      }
    }
    return lowerCaseStr;
  }
  
  console.log(extractLowerCase("AAAAab"));
  