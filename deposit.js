document.getElementById("deposit-btn").addEventListener("click", function(){
    let accountBalance = document.getElementById("account-balance");
    let depositAmount = document.getElementById("input-deposit");
    let depositBalance = document.getElementById("deposit-balance");
    let depositBalanceElement = depositBalance.innerText;
    let depositAmountElement = depositAmount.value;
    depositBalance.innerText += depositAmountElement
})
