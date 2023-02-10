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



  
  //for accessory products pages on click on product image
  const shoesproducts = document.querySelectorAll(".product-image a img");

  shoesproducts.forEach((item, i) => {
    item.addEventListener('click', () =>{
      let parent = item.parentElement.parentElement;
      var src1 = item.src;
      var name = parent.nextElementSibling.children[0].innerHTML;
      var price = parent.nextElementSibling.children[1].children[0].innerHTML;
      var color = parent.nextElementSibling.children[2].children[0].innerHTML;
      var type = parent.nextElementSibling.children[2].children[1].innerHTML;
      var Umaterial = parent.nextElementSibling.children[2].children[2].innerHTML;
      var Lmaterial = parent.nextElementSibling.children[2].children[3].innerHTML;
      localStorage.setItem("src1",src1);
      localStorage.setItem("src2",'');
      localStorage.setItem("name",name);
      localStorage.setItem("price",price);
      localStorage.setItem("Originalprice","");
      localStorage.setItem("discount","");
      localStorage.setItem("color",color);
      localStorage.setItem("type",type);
      localStorage.setItem("Uppermaterial",Umaterial);
      localStorage.setItem("Lowermaterial",Lmaterial);
    })
  })
  
//for accessory products pages on click on add to cart button
var ShoesCart_btn = document.querySelectorAll(".Add-btn");

ShoesCart_btn.forEach((item, i) => {
item.addEventListener('click', () =>{
    let parent = item.parentElement;
    var src1 = parent.previousElementSibling.children[0].children[0].src;
    var name = parent.children[0].innerHTML;
    var price = parent.children[1].children[0].innerHTML;
    var color = parent.children[2].children[0].innerHTML;
    var type = parent.children[2].children[1].innerHTML;
    var Umaterial = parent.children[2].children[2].innerHTML;
    var Lmaterial = parent.children[2].children[3].innerHTML;
    localStorage.setItem("src1",src1);
    localStorage.setItem("src2",'');
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("Originalprice","");
    localStorage.setItem("discount","");
    localStorage.setItem("color",color);
    localStorage.setItem("size&fit",type);
    localStorage.setItem("material",Umaterial);
    localStorage.setItem("material",Lmaterial);
    location.href = "Product_Shoes.html";
})
})