$("ul.nav li div span").css("display","none");
$("ul.nav li").on({
  mouseenter: function(e){
    e.stopPropagation();
    $(this).find("div").toggleClass("active");
    $(this).find("span").stop().slideDown().fadeIn();
  },
  mouseleave: function(e){
    e.stopPropagation();
    $(this).find("div").toggleClass("active");
    $(this).find("span").stop().slideUp().fadeOut();
  },
  click: function(e){
  }
});
