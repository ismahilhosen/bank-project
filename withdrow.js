document.getElementById("withdrow-btn").addEventListener("click", function(){

    let withdrowInput = document.getElementById("withdrow-input");
    let withdrowInputElemant = inputToNum("withdrow-input")

    let withdrowBalance = document.getElementById("withdrow-balance");
    let withdrowBalanceElemant = accountToNumber("withdrow-balance")

    let accountBalance = document.getElementById("account-balance");
    let accountBalanceElemant = accountToNumber("account-balance");

    if(withdrowInputElemant < accountBalanceElemant){
        withdrowBalance.innerText = withdrowBalanceElemant + withdrowInputElemant ;

        accountBalance.innerText = accountBalanceElemant - withdrowInputElemant;withdrowInput.value = "";

    }else{
        let moreDeposit = withdrowInputElemant - accountBalanceElemant;
        alert("no enageh balance for withdrow please deposit more" + moreDeposit);
        console.log(moreDeposit);
        withdrowInput.innerText = "";
    }
    


    

})