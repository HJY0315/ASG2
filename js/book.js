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

  //for  discount books products pages on click on product image
const Discountbookproducts = document.querySelectorAll(".discount .product-image a img");

Discountbookproducts.forEach((item, i) => {
  item.addEventListener('click', () =>{
    let parent = item.parentElement.parentElement;
    var src1 = item.src;
    var name = parent.nextElementSibling.children[0].innerHTML;
    var price = parent.nextElementSibling.children[1].children[0].innerHTML;
    var Originalprice = parent.nextElementSibling.children[1].children[1].innerHTML;
    var discount = parent.children[0].innerHTML;
    var Nopages = parent.nextElementSibling.children[2].children[0].innerHTML;
    var bookdesc = parent.nextElementSibling.children[2].children[1].innerHTML;
    localStorage.setItem("src1",src1);
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("Originalprice",Originalprice);
    localStorage.setItem("discount",discount);
    localStorage.setItem("Nopages",Nopages);
    localStorage.setItem("bookdesc",bookdesc);
  })
})

//for  discount books products pages onclick on add to cart button
var DBookCart_btn = document.querySelectorAll(".discount .Add-btn");

DBookCart_btn.forEach((item, i) => {
  item.addEventListener('click', () =>{
    let parent = item.parentElement;//.product-info
    var id = item.parentElement.parentElement.id;
    var src1 = parent.previousElementSibling.children[1].children[0].src;
    var name = parent.children[0].innerHTML;
    var price = parent.children[1].children[0].innerHTML;
    var Originalprice = parent.children[1].children[1].innerHTML;
    var discount = parent.previousElementSibling.children[0].innerHTML;
    var Nopages = item.previousElementSibling.children[0].innerHTML;
    var bookdesc = item.previousElementSibling.children[1].innerHTML;
    localStorage.setItem("id",id);
    localStorage.setItem("src1",src1);
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("Originalprice",Originalprice);
    localStorage.setItem("discount",discount);
    localStorage.setItem("Nopages",Nopages);
    localStorage.setItem("bookdesc",bookdesc);
    location.href = "Product-book.html";
  })
})


//for Popular books products pages on click on the product image
const Popularbookproducts = document.querySelectorAll(".product-image a img");

Popularbookproducts.forEach((item, i) => {
  item.addEventListener('click', () =>{
    let parent = item.parentElement.parentElement;
    var src1 = item.src;
    var name = parent.nextElementSibling.children[0].innerHTML;
    var price = parent.nextElementSibling.children[1].children[0].innerHTML;
    var Nopages = parent.nextElementSibling.children[2].children[0].innerHTML;
    var bookdesc = parent.nextElementSibling.children[2].children[1].innerHTML;
    localStorage.setItem("src1",src1);
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("Originalprice","");
    localStorage.setItem("discount","");
    localStorage.setItem("Nopages",Nopages);
    localStorage.setItem("bookdesc",bookdesc);
  })
})

//for Popular books products pages on click on add to cart button
var PBookCart_btn = document.querySelectorAll(".Add-btn");

PBookCart_btn.forEach((item, i) => {
  item.addEventListener('click', () =>{
    let parent = item.parentElement;
    var src1 = parent.previousElementSibling.children[0].children[0].src;
    var name = parent.children[0].innerHTML;
    var price = parent.children[1].children[0].innerHTML;
    var Nopages = item.previousElementSibling.children[0].innerHTML;
    var bookdesc = item.previousElementSibling.children[1].innerHTML;
    localStorage.setItem("src1",src1);
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("Originalprice","");
    localStorage.setItem("discount","");
    localStorage.setItem("Nopages",Nopages);
    localStorage.setItem("bookdesc",bookdesc);
    location.href = "Product-book.html";
  })
})