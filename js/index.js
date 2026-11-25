let testimonialBtns = document.querySelectorAll("#testimonial button");
let testimonialCaptions = document.querySelectorAll(
  "#testimonial .carousel-item",
);
let testimonialInfo = document.querySelector("#testimonial .testimonial-info");
let testimonialInfoName = document.querySelector(
  "#testimonial .testimonial-info h4",
);
let testimonialInfoTitle = document.querySelector(
  "#testimonial .testimonial-info p",
);

for (let i = 0; i < testimonialBtns.length; i++) {
  testimonialBtns[i].addEventListener("click", function (e) {
    testimonialCaptions[i].style.display = "block";
    testimonialInfoName.innerHTML =
      testimonialBtns[i].getAttribute("data-name");
    testimonialInfoTitle.innerHTML =
      testimonialBtns[i].getAttribute("data-title");

    let rect = e.currentTarget.getBoundingClientRect();
    let parentRect = e.currentTarget
      .closest(".carousel")
      .getBoundingClientRect();

    let x = rect.left + rect.width / 2 - parentRect.left;
    let y = rect.bottom - parentRect.top + 10; // 10px gap under the button

    testimonialInfo.style.left = x + "px";
    testimonialInfo.style.top = y + "px";
    testimonialInfo.style.transform = "translateX(-50%)"; // center under the button

    testimonialBtns[i].style.transform = "scale(1.2)";
    testimonialBtns[i].style.opacity = "1";

    for (let j = 0; j < testimonialCaptions.length; j++) {
      if (i != j) {
        testimonialCaptions[j].style.display = "none";
        testimonialBtns[j].style.transform = "scale(1)";
        testimonialBtns[j].style.opacity = "0.5";
      }
    }
  });
}
