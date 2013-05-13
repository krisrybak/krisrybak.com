$("ul.nav li div span").css("display","block");
$("ul.nav li").on({
  mouseenter: function(e){
    e.stopPropagation();
    $(this).find("div").toggleClass("active");
    e.preventDefault();
  },
  mouseleave: function(e){
    e.stopPropagation();
    $(this).find("div").toggleClass("active");
    e.preventDefault();
  },
  click: function(e){
  }
});
