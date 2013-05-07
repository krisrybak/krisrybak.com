
$("ul.nav li div span").css("display","none");
/*
$("ul.nav li").hover(
  function () {
    $(this).find("div").toggleClass("active");
    $(this).find("span").slideToggle().fadeIn();
  },
  function ()
  {
    $(this).find("div").toggleClass("active");
    $(this).find("span").fadeOut();
  }
);
*/

$("ul.nav li").on({
  mouseenter: function(e){
    e.stopPropagation();
    $(this).find("div").toggleClass("active");
    $(this).find("span").slideToggle().fadeIn();
    e.preventDefault();
  },
  mouseleave: function(e){
    e.stopPropagation();
    $(this).find("div").toggleClass("active");
    $(this).find("span").fadeOut();
    e.preventDefault();
  },
  click: function(e){
    e.preventDefault();
  }
});
/*
$("ul.nav li").on("click",function(e){
    e.stopPropagation();

    e.preventDefault();
});
*/
