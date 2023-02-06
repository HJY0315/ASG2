
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

const getimage = {
  image: function(){
    return this.image1;
  }
}

const products = document.querySelectorAll(".product-image a img");
const Images = {};

product.forEach((item, i) => {
  item.addEventListener('click', () =>{
    Images = {
      image1: item.src
    }
  })
})