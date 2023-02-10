function change() {
    let results = document.querySelectorAll('.product-container li');
    let genre = document.querySelectorAll('.filters__list li');
    let filtered = [];
    // Hide all results(Products)
    results.forEach((item, i) => {
      item.style.display = 'none';
    });
    // check each of the checkbox, if it is checked, then add it into the array
    genre.forEach((item,i) => {
      if (item.children[0].checked){
        filtered.push(item.children[0].id);
      }
    })
    // For each of the result(Product), if the classname is in the array(it is checked), then display it
    results.forEach((item, i) => {
      if (filtered.includes(item.className)){
        item.style.display = "block";
      }
    });
    // if the length of array is 0 which means that nothing is being filtered, then we show all of the results(products)
    if (filtered.length == 0){
      results.forEach((item, i) => {
        item.style.display = 'block';
      });
    }
  }


//for profile name and login logout display
const profileimagebtn = document.getElementById("profileimg");
const profilePopup = document.querySelector(".login-logout-popup");
const popuptext = document.querySelector(".account-name");
const loginOutBtn = document.querySelector(".login-out-btn");

profileimagebtn.addEventListener('click', () => {
  if (profilePopup.style.display == 'none'){
    profilePopup.style.display  = "block";
  }
  else{
    profilePopup.style.display = "none";
  }
})

window.onload = () => {
  let Username = localStorage.getItem("username")
  if (Username != null){
    popuptext.innerHTML = `Hi, ${Username}`;
    loginOutBtn.innerHTML = 'Log out';
    loginOutBtn.addEventListener('click', () => {
      localStorage.removeItem("username")
      window.location.reload(); 
    })
  }
  else{
    popuptext.innerHTML = 'Log in in order to place order';
    loginOutBtn.innerHTML = 'Log in';
    loginOutBtn.addEventListener('click', () => {
      location.href = '/Signin.html'
    })

  }
}

//for discounted cloth products pages on click on product image 
const Discclothproducts = document.querySelectorAll(".discount .product-image a img");

Discclothproducts.forEach((item, i) => {
  item.addEventListener('click', () =>{
    let parent = item.parentElement.parentElement;
    var src1 = item.src;
    var src2 = parent.children[2].src;
    var src3 = parent.children[3].src;
    var src4 = parent.children[4].src;
    var name = parent.nextElementSibling.children[0].innerHTML;
    var price = parent.nextElementSibling.children[1].children[0].innerHTML;
    var Originalprice = parent.nextElementSibling.children[1].children[1].innerHTML;
    var discount = parent.children[0].innerHTML;
    var color = parent.nextElementSibling.children[2].children[0].innerHTML;
    var length = parent.nextElementSibling.children[2].children[1].innerHTML;
    var fitType = parent.nextElementSibling.children[2].children[2].innerHTML;
    var material = parent.nextElementSibling.children[2].children[3].innerHTML;
    var careInstruction = parent.nextElementSibling.children[2].children[4].innerHTML;
    var composition = parent.nextElementSibling.children[2].children[5].innerHTML;
    localStorage.setItem("src1",src1);
    localStorage.setItem("src2",src2);
    localStorage.setItem("src3",src3);
    localStorage.setItem("src4",src4);
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("Originalprice",Originalprice);
    localStorage.setItem("discount",discount);
    localStorage.setItem("color",color);
    localStorage.setItem("length",length);
    localStorage.setItem("fitType",fitType);
    localStorage.setItem("material",material);
    localStorage.setItem("careInstruction",careInstruction);
    localStorage.setItem("composition",composition);
  })
})

//for discount cloth products pages on click on add to cart button
var DClothCart_btn = document.querySelectorAll(".discount .Add-btn");

DClothCart_btn.forEach((item, i) => {
  item.addEventListener('click', () =>{
    let parent = item.parentElement;
    var src1 = parent.previousElementSibling.children[1].children[0].src;
    var src2 = parent.previousElementSibling.children[2].src;
    var src3 = parent.previousElementSibling.children[3].src;
    var src4 = parent.previousElementSibling.children[4].src;
    var name = parent.children[0].innerHTML;
    var price = parent.children[1].children[0].innerHTML;
    var Originalprice = parent.children[1].children[1].innerHTML;
    var discount = parent.previousElementSibling.children[0].innerHTML;
    var color = parent.children[2].children[0].innerHTML;
    var length = parent.children[2].children[1].innerHTML;
    var fitType = parent.children[2].children[2].innerHTML;
    var material = parent.children[2].children[3].innerHTML;
    var careInstruction = parent.children[2].children[4].innerHTML;
    var composition = parent.children[2].children[5].innerHTML;
    localStorage.setItem("src1",src1);
    localStorage.setItem("src2",src2);
    localStorage.setItem("src3",src3);
    localStorage.setItem("src4",src4);
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("Originalprice",Originalprice);
    localStorage.setItem("discount",discount);
    localStorage.setItem("color",color);
    localStorage.setItem("length",length);
    localStorage.setItem("fitType",fitType);
    localStorage.setItem("material",material);
    localStorage.setItem("careInstruction",careInstruction);
    localStorage.setItem("composition",composition);
    location.href = "Product-cloth.html";
  })
})

//for normal cloth products pages on click on product image
const Popularclothproducts = document.querySelectorAll(".product-image a img");

Popularclothproducts.forEach((item, i) => {
  item.addEventListener('click', () =>{
    let parent = item.parentElement.parentElement;
    var src1 = item.src;
    var src2 = parent.children[1].src;
    var src3 = parent.children[2].src;
    var src4 = parent.children[3].src;
    var name = parent.nextElementSibling.children[0].innerHTML;
    var price = parent.nextElementSibling.children[1].children[0].innerHTML;
    var color = parent.nextElementSibling.children[2].children[0].innerHTML;
    var length = parent.nextElementSibling.children[2].children[1].innerHTML;
    var fitType = parent.nextElementSibling.children[2].children[2].innerHTML;
    var material = parent.nextElementSibling.children[2].children[3].innerHTML;
    var careInstruction = parent.nextElementSibling.children[2].children[4].innerHTML;
    var composition = parent.nextElementSibling.children[2].children[5].innerHTML;
    localStorage.setItem("src1",src1);
    localStorage.setItem("src2",src2);
    localStorage.setItem("src3",src3);
    localStorage.setItem("src4",src4);
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("Originalprice","");
    localStorage.setItem("discount","");
    localStorage.setItem("color",color);
    localStorage.setItem("length",length);
    localStorage.setItem("fitType",fitType);
    localStorage.setItem("material",material);
    localStorage.setItem("careInstruction",careInstruction);
    localStorage.setItem("composition",composition);
  })
})

//for normal cloth products pages on click on add to cart button
var PClothCart_btn = document.querySelectorAll(".Add-btn");

PClothCart_btn.forEach((item, i) => {
  item.addEventListener('click', () =>{
    let parent = item.parentElement;
    var src1 = parent.previousElementSibling.children[0].children[0].src;
    var src2 = parent.previousElementSibling.children[1].src;
    var src3 = parent.previousElementSibling.children[2].src;
    var src4 = parent.previousElementSibling.children[3].src;
    var name = parent.children[0].innerHTML;
    var price = parent.children[1].children[0].innerHTML;
    var color = parent.children[2].children[0].innerHTML;
    var length = parent.children[2].children[1].innerHTML;
    var fitType = parent.children[2].children[2].innerHTML;
    var material = parent.children[2].children[3].innerHTML;
    var careInstruction = parent.children[2].children[4].innerHTML;
    var composition = parent.children[2].children[5].innerHTML;
    localStorage.setItem("src1",src1);
    localStorage.setItem("src2",src2);
    localStorage.setItem("src3",src3);
    localStorage.setItem("src4",src4);
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("Originalprice","");
    localStorage.setItem("discount","");
    localStorage.setItem("color",color);
    localStorage.setItem("length",length);
    localStorage.setItem("fitType",fitType);
    localStorage.setItem("material",material);
    localStorage.setItem("careInstruction",careInstruction);
    localStorage.setItem("composition",composition);
    location.href = "Product-cloth.html";
  })
})