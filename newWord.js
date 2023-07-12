newWord = (str) => {
    let result = '';
    for (let i = 1; i < str.length; i++) {
      result =result+ str[i];
    }
    return result;
  }
  
  console.log(newWord("abcd"));

  