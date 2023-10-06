function cardHide(cardNumber) {    
    const cardNumberStr = cardNumber.toString();

    if (cardNumberStr.length >= 4) {
        const lastFourDigits = cardNumberStr.slice(-4);
        const maskedPart = '*'.repeat(cardNumberStr.length - 4);
        return maskedPart + lastFourDigits;
    } else {
        return cardNumberStr;
    }
}

console.log(cardHide(123456));
