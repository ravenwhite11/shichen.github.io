window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
  {
    document.getElementById("navbar-default").style.padding = "10px 0px 10px 0px";
    document.getElementById("navbar-default").style.opacity="0.8";
  }
  else
  {
    document.getElementById("navbar-default").style.padding = "30px 0px 30px 0px";
    document.getElementById("navbar-default").style.opacity="1";
  }
}