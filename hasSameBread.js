function hasSameBread(sandwich1, sandwich2) {
    return sandwich1[0] === sandwich2[0] && sandwich1[sandwich1.length - 1] === sandwich2[sandwich2.length - 1];
  }
  
  console.log(hasSameBread(
    ["toast", "cheese", "toast"],
  ["brown bread", "cheese", "toast"]
  ));
  