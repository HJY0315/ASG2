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