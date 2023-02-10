
//This is for showing different product images on product page
const productImages = document.querySelectorAll(".product-images img");
const productActiveImage = document.querySelector(".active-image .active");

let activeImage = 0;//default selected images which is the first one

productImages.forEach((item, i) => {
    item.addEventListener('click', () =>{
        productImages[activeImage].classList.remove('active');
        item.classList.add('active');
        productActiveImage.src = item.src;
        activeImage = i;
    })
})

//This is for selecting radio size button

const sizebtn = document.querySelectorAll('.size-radio-button');
let checkedbtn = 0;//default selected button which is the first one

sizebtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizebtn[checkedbtn].classList.remove('check');
        item.classList.add('check');
        checkedbtn = i;
    })
})

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


const image = document.querySelectorAll(".product-images img");
const activeIMG = document.querySelectorAll(".active-image img");
const productname = document.querySelector(".details .product-name");
const productprice = document.querySelector(".details .product-price");
const productdesc = document.querySelectorAll(".desc-list .desc-line");

image[0].src = localStorage.getItem("src1");
image[1].src = localStorage.getItem("src2");
activeIMG[0].src = localStorage.getItem("src1");
productname.innerHTML = localStorage.getItem("name");
productprice.innerHTML = localStorage.getItem("price");

//Change the product desc
productdesc[0].children[1].innerHTML = localStorage.getItem("color");
productdesc[1].children[1].innerHTML = localStorage.getItem("size&fit");
productdesc[2].children[1].innerHTML = localStorage.getItem("material");


  //for accessory products pages on click on product image
  const Accessoryproducts = document.querySelectorAll(".product-image a img");

  Accessoryproducts.forEach((item, i) => {
    item.addEventListener('click', () =>{
      let parent = item.parentElement.parentElement;
      var src1 = item.src;
      var src2 = parent.children[1].src;
      var name = parent.nextElementSibling.children[0].innerHTML;
      var price = parent.nextElementSibling.children[1].children[0].innerHTML;
      var color = parent.nextElementSibling.children[2].children[0].innerHTML;
      var size_fit = parent.nextElementSibling.children[2].children[1].innerHTML;
      var material = parent.nextElementSibling.children[2].children[2].innerHTML;
      localStorage.setItem("src1",src1);
      localStorage.setItem("src2",src2);
      localStorage.setItem("name",name);
      localStorage.setItem("price",price);
      localStorage.setItem("Originalprice","");
      localStorage.setItem("discount","");
      localStorage.setItem("color",color);
      localStorage.setItem("size&fit",size_fit);
      localStorage.setItem("material",material);
    })
  })


//for accessory products pages on click on add to cart button
var PaccessCart_btn = document.querySelectorAll(".Add-btn");

PaccessCart_btn.forEach((item, i) => {
  item.addEventListener('click', () =>{
    let parent = item.parentElement;
    var src1 = parent.previousElementSibling.children[0].children[0].src;
    var src2 = parent.previousElementSibling.children[1].src;
    var name = parent.children[0].innerHTML;
    var price = parent.children[1].children[0].innerHTML;
    var color = parent.children[2].children[0].innerHTML;
    var size_fit = parent.children[2].children[1].innerHTML;
    var material = parent.children[2].children[2].innerHTML;
    localStorage.setItem("src1",src1);
    localStorage.setItem("src2",src2);
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("Originalprice","");
    localStorage.setItem("discount","");
    localStorage.setItem("color",color);
    localStorage.setItem("size&fit",size_fit);
    localStorage.setItem("material",material);
    location.href = "Product_accessories.html";
  })
})


const cart_item = [];

//Add to cart button
var AddToCartBtn = document.querySelector(".add-cart-btn");

AddToCartBtn.addEventListener('click', () =>{
  let price_with_$ = document.querySelector('.product-price').innerHTML;

  let productObj = {
    product_image: document.querySelector('.active').src,
    product_name: document.querySelector('.product-name').innerHTML,
    product_size: 'null',
    product_price: price_with_$.substring(price_with_$.indexOf('$') + 1),
    product_OriPrice: 0,
    product_discount: '',
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