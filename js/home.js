window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    document.getElementById("navbar").style.top = "-50px";
  } 
  if (document.body.scrollBottom > 20 || document.documentElement.scrollBottom > 20)
  {
    document.getElementById("navbar").style.top = "0px";
  }
}