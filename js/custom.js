$(function(){    
$(window).on('load', function(){
   $(".preloader").delay(1500).fadeOut(500); 
});    
$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if(scrolling > 100){
    $(".navbar").addClass("bg");
}
else{
    $(".navbar").removeClass("bg");
}
if(scrolling > 200){
   $(".b2top").fadeIn(500);
}
else{
    $(".b2top").fadeOut(500);
}    
});    
    
  
    
// Smooth scroll
$('nav a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 40
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

//back to top
$(".b2top").click(function(){
   $('html, body').animate({scrollTop:0},1500); 
});    
    
//banner slider
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
    arrows:false,
    fade:true,
    speed:2500,
  autoplaySpeed: 3000,
});
    
//team slider
$('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
    arrows:false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    }  
  ]     
}); 
//testimonial slider
$('.test-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
    arrows:false,
    dots:true,
  autoplaySpeed: 2000,
}); 
    
    
// wow js
new WOW().init();      
});