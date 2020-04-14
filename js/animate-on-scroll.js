function isVisible(section) {
  let sectionBox = section.getBoundingClientRect(),
    pxFromTop = -140;

  if (sectionBox.top - window.innerHeight < pxFromTop) {
    return true;
  } else {
    return false;
  }
}

function showSection() {
  let sections = document.querySelectorAll(".js-aos-hidden");
  sections.forEach(function (section) {
    if (isVisible(section)) {
      section.classList.remove("js-aos-hidden");
      section.classList.add("js-aos-slideDown");
    } else {
      section.classList.add("js-aos-hidden");
    }
  });
}

function showBio() {
  let bioItems = document.querySelectorAll(".js-aos-hidden-bio");

  bioItems.forEach(function (bioItem) {
    if (isVisible(bioItem)) {
      bioItem.classList.remove("js-aos-hidden-bio");
      bioItem.classList.add("js-aos-slideDown");
    } else {
      bioItem.classList.add("js-aos-hidden-bio");
    }

    for (let i = 0; i < bioItems.length; i++) {
      window.setTimeout(showBio, 5000 + i * 5000);
    }
  });
}

document.addEventListener("scroll", showBio, false);
document.addEventListener("scroll", throttle(showSection, 300), false);

function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
