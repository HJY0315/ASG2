const submitButton = document.querySelector(".submit-btn");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const phone = document.querySelector("#phone");
const APIKEY = "63b95c28969f06502871ac12";
const emaillist = [];

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

$(".submit-btn").on("click", function(e) {
    e.preventDefault();
    
    if (username.value.length < 3) {
        alert("Name must be at least 3 letters long");
    }
    else if (!email.value.length) {
        alert("Please enter your email");
    }
    else if (!email.value.match(validRegex)) {
        alert("Please enter a valid email");
    }
    else if (password.value.length < 8 || !password.value.length) {
        alert("Password should at least 8 letters long");
    }
    else if (!phone.value.length) {
        alert("Please enter your phone number");
    }
    else if (phone.value.length != 8 || isNaN(phone.value)) {
        alert("Invalid number, please enter a valid phone number with 8 digits");
    }
    else {

        let settings = {
            "async": false,
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
            for (var i = 0; i < response.length; i++) {
                emaillist.push(response[i].email);
            }
            post();
        })
    }
})


function post(){
    if (emaillist.includes(email.value)){
        alert("The email have been registered with another account");
    }
    else{
        alert("lottieshowing");
        $(".lottieloading").show();

        let jsondata = {
            "name": username.value,
            "email": email.value,
            "password": password.value,
            "phone": phone.value
        }

        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedev-333e.restdb.io/rest/profile",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
        }
        $.ajax(settings).done(function (response) {
            console.log(response);
            $(".lottieloading").hide();
            $(".lottiecompleted").show().fadeOut(3000);
        })
    }
}