$("ul.nav li div span").css("display","block");
$("ul.nav li").hover(
  function () {
    $(this).find("div").toggleClass("active");
    $(this).find("span").slideToggle().fadeIn();
  },
  function ()
  {
    $(this).find("div").toggleClass("active");
    $(this).find("span");
  }
);
