
//product scroller
const productContainer = [...document.querySelectorAll('.product-container')];
const nextbutton = [...document.querySelectorAll('.next-button')];
const prevbutton = [...document.querySelectorAll('.prev-button')];

productContainer.forEach((item, i) => {
    let c = item.getBoundingClientRect();
    let containerWidth = c.width-1000;

    nextbutton[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    })

    prevbutton[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    })
});


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


const activeIMG = document.querySelectorAll(".active-image img");
const productname = document.querySelector(".details .product-name");
const productprice = document.querySelector(".details .product-price");
const productoriginalprice = document.querySelector(".details .product-original-price");
const productdiscount = document.querySelector(".details .product-discount");
const ProductPages = document.querySelector(".pages")
const Bookdesc = document.querySelector(".bookdesc")

activeIMG[0].src = localStorage.getItem("src1");
productname.innerHTML = localStorage.getItem("name");
productprice.innerHTML = localStorage.getItem("price");
productoriginalprice.innerHTML = localStorage.getItem("Originalprice");
productdiscount.innerHTML = localStorage.getItem("discount");
ProductPages.innerHTML = localStorage.getItem("Nopages");
Bookdesc.innerHTML = localStorage.getItem("bookdesc");

//for Popular books products pages on click on product image
const Popularbookproducts = document.querySelectorAll(".popular-book .product-image a img");

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
var PBookCart_btn = document.querySelectorAll(".more_product .Add-btn");

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


const cart_item = [];

//Add to cart button
var AddToCartBtn = document.querySelector(".add-cart-btn");

AddToCartBtn.addEventListener('click', () =>{
  let price_with_$ = document.querySelector('.product-price').innerHTML;
  let Oriprice_with_$ = document.querySelector('.product-original-price').innerHTML;

  let productObj = {
    product_image: document.querySelector('.active').src,
    product_name: document.querySelector('.product-name').innerHTML,
    product_size: "null",
    product_price: price_with_$.substring(price_with_$.indexOf('$') + 1),
    product_OriPrice: Oriprice_with_$.substring(Oriprice_with_$.indexOf('$') + 1),
    product_discount: document.querySelector('.product-discount').innerHTML,
  }

  cart_item.push(productObj); //put in the new cart items
  let existItems = JSON.parse(localStorage.getItem("CartObj"));//get the array with items from localstorage
  if (existItems != null){ //if the array in localstorage have cart items
    for (let i = 0; i < existItems.length; i++) {
      cart_item.push(existItems[i]);//store the items inside the array
    }
  }
  
  localStorage.setItem("CartObj",JSON.stringify(cart_item)); //assign the updated cart items array to localstorage

  $(".AddCartlottie").show().fadeOut(3000); //display lottie
})


