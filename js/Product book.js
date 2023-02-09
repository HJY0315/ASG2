
//product scroller
const productContainer = [...document.querySelectorAll('.product-container')];
const nextbutton = [...document.querySelectorAll('.next-button')];
const prevbutton = [...document.querySelectorAll('.prev-button')];

productContainer.forEach((item, i) => {
    let c = item.getBoundingClientRect();
    let containerWidth = c.width-200;

    nextbutton[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    })

    prevbutton[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    })
});



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


//for Popular books products pages
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