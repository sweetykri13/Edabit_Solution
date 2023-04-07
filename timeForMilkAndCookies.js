function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
  }
console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); // true

  