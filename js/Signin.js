const submitButton = document.querySelector(".submit-btn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const APIKEY = "63b95c28969f06502871ac12";

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

$(".submit-btn").on("click", function(e) {
    e.preventDefault();
    if (!email.value.length) {
        alert("Please enter your email");
    }
    else if (!email.value.match(validRegex)) {
        alert("Please enter a valid email");
    }
    else if (password.value.length < 8 || !password.value.length) {
        alert("Password should at least 8 letters long");
    }
    else{
        $(".lottieloading2").show();
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedev-333e.restdb.io/rest/profile",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
        }
    
        $.ajax(settings).done(function (response) {
            $(".lottieloading2").hide();
            setTimeout(function () {
                for (var i = 0; i < response.length; i++) {
                    if(response[i].email == email.value){
                        if(response[i].password == password.value){
                            localStorage.setItem("username",response[i].name);
                            window.history.back();//go back to previous page
                            break;
                        }  
                        else{
                            alert("You have entered a wrong password");
                            break;
                        }
                    }
                    else{
                        if (i+1 == response.length){
                            alert("You have entered a wrong email");
                        }
                    }
                }
             }, 110)

        })
    }

})