const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password")



function loginAth(emali,password){
    if(emali === "ismahilhosen4000@gmail.com" && password === "1234"){
        location.href = "./index.html"
    }else{
        alert("password and email incorrect")
    }
}

const submitBtn = document.getElementById("submit")

document.getElementById("submit").addEventListener("click", function(){
    loginAth(inputEmail.value,inputPassword.value);

})

// login page 
// deposit
