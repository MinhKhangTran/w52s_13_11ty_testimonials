const testiArray = [
  {
    id: 1,
    quote:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    name: "Tanya Sinclair",
    job: "UX Engineer",
    image: "image-tanya",
  },
  {
    id: 2,
    quote:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    image: "image-john",
  },
];

const testiSection = document.querySelector(".testimonial");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let newArray = [...testiArray];

// duplicat array if length is 2
if (testiArray.length === 2) {
  newArray = [...testiArray, ...testiArray];
}

testiSection.innerHTML = newArray
  .map((testi, index) => {
    const { image, quote, name, job } = testi;
    // position def
    let position = "next";
    if (index === 0) {
      position = "active";
    }
    if (index === newArray.length - 1) {
      position = "last";
    }
    // returning dynamic html
    return `
    <article  class="${position} testimonials" >
    <div class="testi__left">
    <div class="quote__wrapper">
      <p class="body fw-300 text-dark-blue">${quote}</p>
    </div>
    <div class="bio__wrapper | d-flex">
      <h2 class="name fw-700 text-dark-blue">${name}</h2>
      <p class="name fw-500 text-grayish-blue">${job}</p>
    </div>
    <img src="./images/pattern-quotes.svg" alt="" class="quotes" />
  </div>
  <div class="testi__right">
    <img src="./images/${image}.jpg" alt="Tanya" class="profile__pic" />
    <img src="./images/pattern-bg.svg" class="bg" alt="" />
  </div>

  </article>
    `;
  })
  .join("");

const startSlider = (type) => {
  // get all three slides active,last next

  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = testiSection.firstElementChild;
  }
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;

    // no next reset to first one
    if (!next) {
      next = testiSection.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};
nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
