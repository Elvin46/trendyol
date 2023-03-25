// var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
// var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
//   return new bootstrap.Dropdown(dropdownToggleEl)
// })

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  // if(!menuOpen) {
  //   menuBtn.classList.add('open');
  //   menuOpen = true;
  // } else {
  //   menuBtn.classList.remove('open');
  //   menuOpen = false;
  // }
  menuBtn.classList.toggle('open');
});
const btn = document.querySelector(".menu-btn")
const collapse = document.querySelector(".sidebar")
btn.addEventListener('click' , function() {
    collapse.classList.toggle("visible")
});


const profileBtn = document.querySelector('.my-profile');
let profileOpen = false;
profileBtn.addEventListener('click', () => {
  // if(!menuOpen) {
  //   menuBtn.classList.add('open');
  //   menuOpen = true;
  // } else {
  //   menuBtn.classList.remove('open');
  //   menuOpen = false;
  // }
  profileBtn.classList.toggle('open');
});
const btn1 = document.querySelector(".my-profile")
const collapse1 = document.querySelector(".sidebar_profile")
btn1.addEventListener('click' , function() {
    collapse1.classList.toggle("visible")
});