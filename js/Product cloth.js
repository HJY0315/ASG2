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

const image = document.querySelectorAll(".product-images img");
const activeIMG = document.querySelectorAll(".active-image img");
const productname = document.querySelector(".details .product-name");
const productprice = document.querySelector(".details .product-price");
const productoriginalprice = document.querySelector(".details .product-original-price");
const productdiscount = document.querySelector(".details .product-discount");
const productdesc = document.querySelectorAll(".desc-list .desc-line");

image[0].src = localStorage.getItem("src1");
image[1].src = localStorage.getItem("src2");
image[2].src = localStorage.getItem("src3");
image[3].src = localStorage.getItem("src4");
activeIMG[0].src = localStorage.getItem("src1");
productname.innerHTML = localStorage.getItem("name");
productprice.innerHTML = localStorage.getItem("price");
productoriginalprice.innerHTML = localStorage.getItem("Originalprice");
productdiscount.innerHTML = localStorage.getItem("discount");

//Change the product desc
productdesc[0].children[1].innerHTML = localStorage.getItem("color");
productdesc[1].children[1].innerHTML = localStorage.getItem("length");
productdesc[2].children[1].innerHTML = localStorage.getItem("fitType");
productdesc[3].children[1].innerHTML = localStorage.getItem("material");
productdesc[4].children[2].innerHTML = localStorage.getItem("careInstruction");
productdesc[5].children[2].innerHTML = localStorage.getItem("composition");


//for popular cloth products pages transfer details
const Popularclothproducts = document.querySelectorAll(".clothing .product-image a img");

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