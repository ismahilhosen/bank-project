document.getElementById("deposit-btn").addEventListener("click", function(){
    let accountBalance = document.getElementById("account-balance");
    let depositAmount = document.getElementById("input-deposit");
    let depositBalance = document.getElementById("deposit-balance");
    let accountBalanceElemant = accountToNumber("account-balance");
    let depositAmountElement = inputToNum("input-deposit");
    let depositBalanceElement = accountToNumber("account-balance");
    console.log(depositBalanceElement);

    depositBalance.innerText = depositAmountElement + depositBalanceElement;

    accountBalance.innerText = depositAmountElement + accountBalanceElemant;

    depositAmount.value = ""
    
;})

