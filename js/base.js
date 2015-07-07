/*
*
*
* 2014-12-30  design by Allen
* */


$(function(){
  $(".more li:has(ul)").css({"background" : "none"});
  $(".more li:has(ul)").toggle(function(){
    $(".more li:has(ul)").find('ul').hide();
    $(this).find('ul').show();
    $(".more li:has(ul)").find('i').removeClass('arrow_carrot-2down');
    $(".more li:has(ul)").find('i').find('span').show();
    $(this).find('i').addClass("arrow_carrot-2down");
    $(this).find('i').find('span').hide();
  },
  function(){
    $(this).find('ul').hide();
    $(".more li:has(ul)").find('i').removeClass('arrow_carrot-2down');
    $(".more li:has(ul)").find('i').find('span').show();
  }
  )
})
