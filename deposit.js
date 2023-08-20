document.getElementById("deposit-btn").addEventListener("click", function(){
    let accountBalance = document.getElementById("account-balance");

    let depositAmount = document.getElementById("input-deposit");

    let depositBalance = document.getElementById("deposit-balance");

    let accountBalanceElemantString = accountBalance.innerText;

    let depositBalanceElementString = depositBalance.innerText;

    let depositAmountElementstring = depositAmount.value;

    let accountBalanceElemant = parseFloat(accountBalanceElemantString);

    let depositAmountElement = parseFloat(depositAmountElementstring);
    
    let depositBalanceElement = parseFloat(depositBalanceElementString);
    console.log(depositBalanceElement);

    depositBalance.innerText = depositAmountElement + depositBalanceElement;

    accountBalance.innerText = depositAmountElement + accountBalanceElemant;

    depositAmount.value = ""
    
;})

