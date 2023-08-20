document.getElementById("withdrow-btn").addEventListener("click", function(){

    let withdrowInput = document.getElementById("withdrow-input");
    let withdrowInputElemantString = withdrowInput.value
    let withdrowInputElemant = parseFloat(withdrowInputElemantString)

    let withdrowBalance = document.getElementById("withdrow-balance");
    let withdrowBalanceElemantString = withdrowBalance.innerText;
    let withdrowBalanceElemant = parseFloat(withdrowBalanceElemantString);

    let accountBalance = document.getElementById("account-balance");
    let accountBalanceElemantString = accountBalance.innerText;
    let accountBalanceElemant = parseFloat(accountBalanceElemantString);

    if(withdrowInputElemant < accountBalanceElemant){
        withdrowBalance.innerText = withdrowBalanceElemant + withdrowInputElemant ;

        accountBalance.innerText = accountBalanceElemant - withdrowInputElemant;withdrowInput.value = "";

    }else{
        let moreDeposit = withdrowInputElemant - accountBalanceElemant;
        alert("no enageh balance for withdrow please deposit more " + moreDeposit +"$");
        console.log(moreDeposit);
        withdrowInput.innerText = "";
    }
    


    

})