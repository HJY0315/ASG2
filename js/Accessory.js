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


  //for Popular books products pages
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