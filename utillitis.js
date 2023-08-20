function inputToNum(inputElemant){
    const elemant = document.getElementById(inputElemant);
    const elemantString = elemant.value;
    let elemantNumber = parseFloat(elemantString);
    return elemantNumber;
}

function accountToNumber(input){
    const accountElemant = document.getElementById(input);
    const accountElemantString = accountElemant.innerText;
    const accountElemantNumber = parseFloat(accountElemantString);
    return accountElemantNumber;
}