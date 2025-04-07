// 1. Target the element from HTML document
document.querySelector(".btn-click").addEventListener("click", function () {
  // first we tell DOM what element to listen to
  // we add eventListener and tell what it should listen to, click
  // once the click is fired of this function will run
  document.querySelector(".message").textContent = "You clicked the button!";
});
