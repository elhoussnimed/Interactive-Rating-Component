let submit = document.querySelector("[type=submit]");
let ratingParent = document.querySelector(".rating");
let thankYou = document.querySelector(".thank-you");
let ratingNumber = document.querySelectorAll(".rating-number span");
let ratingSelected = document.querySelector(".rating-selected");

submit.onclick = () => {
  ratingParent.style.cssText = "display: none";
  thankYou.style.cssText = "display: block";
};

// for (let i = 0; i < ratingNumber.length; i++) {
//     ratingNumber[i].onclick = function () {
//     ratingSelected.textContent = ratingNumber[i].textContent;
//     ratingNumber[i].style.cssText = "background-color: var(--Orange); color: var(--white)";
//     };
//   };

ratingNumber.forEach( e => {
  e.onclick = () => {
    for (let i = 0; i < ratingNumber.length; i++) {
      ratingNumber[i].classList.remove("span-click");
    }
    e.classList.add("span-click");
    ratingSelected.textContent = e.textContent;
  }
});