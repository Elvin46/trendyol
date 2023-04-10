
//HAMBURGER
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
});
const btn = document.querySelector(".menu-btn")
const collapse = document.querySelector(".sidebar")
btn.addEventListener('click' , function() {
    collapse.classList.toggle("visible")
});

//RESPONSIVE NAVBAR COLLAPSE
$(document).ready(function(){
  $('.sub-btn').click(function(){
      $(".sub-menu").not($(this).next()).slideUp();
      $('.rotate').not($(this).children()).removeClass('rotate');
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
  })
})
//NAVBAR COLLAPSE
var openedMenu;
$('.sub-menu-btn').click(function(ev){
  var btn = document.getElementsByClassName("sub-menu");
  $('.sub-menu').removeClass("visible");
  $(this).find('.sub-menu').toggleClass('visible');
  openedMenu = $(this).find('.sub-menu');
  ev.stopPropagation();
})
$(document).click(function() {
  $(this).find('.sub-menu').removeClass('visible');
});
$('.moda-vitrini').click(function(ev){
  console.log("salam");
  $(".moda-vitrini-menu").toggleClass('visible');
  $(".moda-vitrini-menu").toggleClass('d-none');
  ev.stopPropagation();
})
const profileBtn = document.querySelector('.my-profile');
let profileOpen = false;
profileBtn.addEventListener('click', () => {
  profileBtn.classList.toggle('open');
});
const btn1 = document.querySelector(".my-profile")
const collapse1 = document.querySelector(".sidebar_profile")
btn1.addEventListener('click' , function() {
    collapse1.classList.toggle("visible")
});