var ps = 30; //pattern speed


for (i = 1; i < 6; i++) {
  $(".pie__corner:first-child").clone().appendTo(".pie");
}

// const moveBg = () => {
//   $('.pie__piece').width(ps + pageYOffset);
// };

// moveBg();

// window.addEventListener('scroll', function () {
//   moveBg();
// });

// window.onscroll = function () {
//   scrollRotate();
// };

// function scrollRotate() {
//   let image = document.getElementsByClassName("pie__piece");
//   image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
// }

$(function() {
  var rotate = function(pie__piece, angle) {
    pie__piece.css({
   "transform" : "rotate("+angle+"deg)"
   });
  }
  $(window).scroll(function(){
   rotate($(".pie__piece"), $(window).scrollTop()*0.05);
  })
 });