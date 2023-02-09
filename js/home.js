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

//for discounted cloth products pages
const Discclothproducts = document.querySelectorAll(".Discount .clothing .product-image a img");

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


//for popular cloth products pages
const Popularclothproducts = document.querySelectorAll(".Popular .clothing .product-image a img");

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

//for  discount books products pages
const Discountbookproducts = document.querySelectorAll(".Discount .book .product-image a img");

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


//for Popular books products pages
const Popularbookproducts = document.querySelectorAll(".Popular .popular-book .product-image a img");

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