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

let Cart_items = JSON.parse(localStorage.getItem("CartObj"));

for (let i = 0; i < Cart_items.length; i++) {
  let data_image = Cart_items[i].product_image;
  let data_name = Cart_items[i].product_name;
  let data_size = Cart_items[i].product_size;
  let data_price = Cart_items[i].product_price;
  let data_OriPrice = Cart_items[i].product_OriPrice;
  let data_discount = Cart_items[i].product_discount;
  if (data_size == "null"){ //which mean it is a book and book dont have size
    let data = `    
    <div class="cart">
        <div class="cart-item">
            <img src="${data_image}">
            <div class="cart-item-detail">
                <h2 class="cart-item-name">${data_name}</h2>
                <h2 class="cart-item-size"></h2>
            </div>
        </div>
        <div class="price-quantity">
            <div class="price-quantity-detail">
            <span class="cart-item-price">$</span><span>${data_price}</span>
            <span class="cart-item-oriprice"></span><span class="cart-item-oriprice">${data_OriPrice}</span>
            <span class="item_discount">${data_discount}</span>
            </div>
            <h2 class="cart-item-quantity">x 1</h2>
            <button class="removebtn">Remove</button>
        </div>
    </div>
    `

    $('.total').before(data);
  }
  else{
    let data = `    
    <div class="cart">
        <div class="cart-item">
            <img src="${data_image}">
            <div class="cart-item-detail">
                <h2 class="cart-item-name">${data_name}</h2>
                <h2 class="cart-item-size">Size: ${data_size}</h2>
            </div>
        </div>
        <div class="price-quantity">
            <div class="price-quantity-detail">
            <span class="cart-item-price">$</span><span>${data_price}</span>
            <span class="cart-item-oriprice"></span><span class="cart-item-oriprice">${data_OriPrice}</span>
            <span class="item_discount">${data_discount}</span>
            </div>
            <h2 class="cart-item-quantity">x 1</h2>
            <button class="removebtn">Remove</button>
        </div>
    </div>
    `

    $('.total').before(data);
  }
}
calculatetotal();



let remove_button = document.querySelectorAll('.removebtn');

remove_button.forEach((item,i) => {
  item.addEventListener('click', () => {
    let parent = item.parentElement.parentElement;
    $(parent).remove();
    let Items = [];
    let name = item.parentElement.previousElementSibling.children[1].children[0].innerHTML;
    let existItems = JSON.parse(localStorage.getItem("CartObj"))
    existItems.forEach((data,d) => {
      Items.push(existItems[d]);
    })

    existItems.forEach((data,d) => {
      if(data.product_name == name){
        Items.splice(d,1)
      }
    })  
    localStorage.setItem("CartObj",JSON.stringify(Items));

    calculatetotal();
  })
})



function calculatetotal(){
  let totalprice = document.querySelector(".price");
  let cart_products_price = document.querySelectorAll(".cart-item-price");
  
  let price_count = 0;
  
  cart_products_price.forEach((item,i) => {
      price_count += parseFloat(item.nextElementSibling.innerHTML);
  })
  price_count = price_count.toFixed(2);
  totalprice.innerHTML = price_count.toString();
  }