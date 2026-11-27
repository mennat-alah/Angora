// projects data
let projects = [
  {
    category: "Branding",
    desc: "poster-frame",
    imgSrc: "images/project-1.jpg",
  },
  {
    category: "Branding",
    desc: "Tri Fold Brochure",
    imgSrc: "images/project-3.jpg",
  },
  {
    category: "Branding",
    desc: "Plastic Pouch",
    imgSrc: "images/project-6.jpg",
  },
  {
    category: "Branding",
    desc: "Brand Minute",
    imgSrc: "images/project-7.jpg",
  },
  {
    category: "Web Design",
    desc: "Elegant Site",
    imgSrc: "images/project-2.jpg",
  },
  {
    category: "Web Design",
    desc: "Motorcycle Helmet",
    imgSrc: "images/project-5.jpg",
  },
  {
    category: "Web Design",
    desc: "Jones Photography",
    imgSrc: "images/project-8.jpg",
  },
];
let btnAll = document.getElementById("pills-all-tab");
let btnBranding = document.getElementById("pills-branding-tab");
let btnWeb = document.getElementById("pills-web-design-tab");
let allContainer = document.getElementById("pills-all");
let allBranding = document.getElementById("pills-branding");
let allWeb = document.getElementById("pills-web-design");

// projects functions
function displayBranding() {
  let cartoona = ``;
  let brandingElements = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].category == "Branding") {
      brandingElements.push(projects[i]);
    }
  }
  console.log(brandingElements);

  for (let j = 0; j < brandingElements.length; j++) {
    cartoona += `<div class="project-item col-lg-3 col-md-6 col-12">
                            <div class="position-relative">
                                <img src="${brandingElements[j].imgSrc}" class="w-100" alt="">
                                <a href="#"
                                    class="text-decoration-none project-item-info position-absolute d-flex justify-content-center align-items-center text-center">
                                    <div>
                                        <h5 id="project-item-desc" class="text-black fw-bold mb-3">${brandingElements[j].desc}</h5>
                                        <h6 id="project-item-category" class="text-muted w-medium">Branding</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
    `;
  }
  allBranding.innerHTML = `<div class="row" > ${cartoona} </div>`;
}
function displayWeb() {
  let cartoona = ``;
  let webElements = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].category == "Web Design") {
      webElements.push(projects[i]);
    }
  }
  for (let j = 0; j < webElements.length; j++) {
    cartoona += `<div class="project-item col-lg-3 col-md-6 col-12">
                            <div class="position-relative">
                                <img src="${webElements[j].imgSrc}" class="w-100" alt="">
                                <a href="#"
                                    class="text-decoration-none project-item-info position-absolute d-flex justify-content-center align-items-center text-center">
                                    <div>
                                        <h5 id="project-item-desc" class="text-black fw-bold mb-3">${webElements[j].desc}</h5>
                                        <h6 id="project-item-category" class="text-muted w-medium">Web Design</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
    `;
  }
  allWeb.innerHTML = `<div class="row" > ${cartoona} </div>`;
}
function displayAll() {
  let cartoona = ``;
  for (let j = 0; j < projects.length; j++) {
    cartoona += `<div class="project-item col-lg-3 col-md-6 col-12">
                            <div class="position-relative">
                                <img src="${projects[j].imgSrc}" class="w-100" alt="">
                                <a href="#"
                                    class="text-decoration-none project-item-info position-absolute d-flex justify-content-center align-items-center text-center">
                                    <div>
                                        <h5 id="project-item-desc" class="text-black fw-bold mb-3">${projects[j].desc}</h5>
                                        <h6 id="project-item-category" class="text-muted w-medium">${projects[j].category}</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
    `;
  }
  allContainer.innerHTML = `<div class="row" > ${cartoona} </div>`;
}

displayAll();
btnAll.addEventListener("click", displayAll);
btnBranding.addEventListener("click", displayBranding);
btnWeb.addEventListener("click", displayWeb);

// -----------------------------------------------------------
// testimonial js
// Get all the buttons (the round client photos) inside the testimonial section
let testimonialBtns = document.querySelectorAll("#testimonial button");
// Get all the slides (the review texts), one for each button
let testimonialCaptions = document.querySelectorAll(
  "#testimonial .carousel-item",
);
// Get the div that holds the name and title (this is the box we move under the button)
let testimonialInfo = document.querySelector("#testimonial .testimonial-info");
// Get the h4 where the person's name will be written
let testimonialInfoName = document.querySelector(
  "#testimonial .testimonial-info h4",
);
// Get the p where the person's title will be written (for example "From Hooli")
let testimonialInfoTitle = document.querySelector(
  "#testimonial .testimonial-info p",
);

// testimonial function
// Loop over all the buttons. i is the index of the current button (0 to 4)
for (let i = 0; i < testimonialBtns.length; i++) {
  // Add a click event to each button
  // e is the event object. It has information about the click and the button
  testimonialBtns[i].addEventListener("click", function (e) {
    // Show the caption that belongs to this button
    testimonialCaptions[i].style.display = "block";

    // Write the name inside the h4. It comes from the button's data-name attribute
    testimonialInfoName.innerHTML =
      testimonialBtns[i].getAttribute("data-name");

    // Write the title inside the p. It comes from the button's data-title attribute
    testimonialInfoTitle.innerHTML =
      testimonialBtns[i].getAttribute("data-title");

    // Position and size of the clicked button, relative to the screen (viewport)
    // e.currentTarget is the button that the listener is attached to
    let rect = e.currentTarget.getBoundingClientRect();

    // Position and size of the carousel, also relative to the screen
    // closest(".carousel") goes up to the nearest parent with the class "carousel"
    let parentRect = e.currentTarget
      .closest(".carousel")
      .getBoundingClientRect();

    // x = the horizontal center of the button (left + half of the width)
    // We subtract parentRect.left to convert from screen position to carousel position
    let x = rect.left + rect.width / 2 - parentRect.left;

    // y = the bottom edge of the button, so the info box sits under it
    // We subtract parentRect.top to convert to carousel position
    // The + 10 adds a small gap between the button and the text
    let y = rect.bottom - parentRect.top + 10; // 10px gap under the button

    // Move the info box to the calculated position
    // "px" is required, otherwise the browser ignores the value
    testimonialInfo.style.left = x + "px";
    testimonialInfo.style.top = y + "px";

    // Shift the box back by half of its own width, so it is centered under the button
    testimonialInfo.style.transform = "translateX(-50%)"; // center under the button

    // Make the clicked button 20% bigger so it looks selected
    testimonialBtns[i].style.transform = "scale(1.2)";

    // Make the selected button fully visible (no transparency)
    testimonialBtns[i].style.opacity = "1";

    // Second loop: hide and shrink everything that is not selected
    for (let j = 0; j < testimonialCaptions.length; j++) {
      // If j is not the selected button (i)
      if (i != j) {
        // Hide its caption
        testimonialCaptions[j].style.display = "none";

        // Return its button to normal size
        testimonialBtns[j].style.transform = "scale(1)";

        // Make it half transparent so it looks not selected
        testimonialBtns[j].style.opacity = "0.5";
      }
    }
  });
}
// When the page finishes loading (images, fonts, and layout),
// we wait for "load" so getBoundingClientRect gives correct positions
window.addEventListener("load", function () {
  // Click the first button automatically, so all the code above runs for it:
  // the name and title show, the info box moves under it, and its caption shows
  testimonialBtns[0].click();
});
