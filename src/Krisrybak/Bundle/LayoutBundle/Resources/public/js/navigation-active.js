$("ul.nav li div span").css("display","block");
$("ul.nav li").on({
  mouseenter: function(e){
    e.stopPropagation();
    $(this).find("div").toggleClass("active");
    $(this).find("span").stop().slideDown().fadeIn();
    e.preventDefault();
  },
  mouseleave: function(e){
    e.stopPropagation();
    $(this).find("div").toggleClass("active");
    $(this).find("span").stop().slideUp().fadeOut();
    e.preventDefault();
  },
  click: function(e){
    e.preventDefault();
  }
});
