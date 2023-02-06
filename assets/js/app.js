// FAQ Functionality
const faqs = document.querySelectorAll(".faq");
faqs.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});

// navigate "Get loan Offer" page
const form = document.getElementById("multi-step-form");
// Stepper
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");
const step4 = document.getElementById("step-4");
const step5 = document.getElementById("step-5");
// Step Group
const stepGroup1 = document.getElementById("stepGroup-1");
const stepGroup2 = document.getElementById("stepGroup-2");
const stepGroup3 = document.getElementById("stepGroup-3");
const stepGroup4 = document.getElementById("stepGroup-4");
const stepGroup5 = document.getElementById("stepGroup-5");
const stepGroup6 = document.getElementById("stepGroup-6");
window.addEventListener("load", () => {
  // window.history.pushState({currentState: "1"},null,"?step=1")
  // Step Group Item
  const stepGroup1Items = document.querySelectorAll(".stepGroup__item");
  stepGroup1Items.forEach((gp) => {
    window.history.pushState({ currentState: "1" }, null, "?step=1");
    gp.addEventListener("click", () => {
      stepGroup1.style.display = "none";
      stepGroup2.style.display = "block";
      step2.classList.add("active");
      window.history.pushState({ currentState: "2" }, null, "?step=2");
    });
  });
  // Step Group Item
  const stepGroup2Items = document.querySelectorAll(".group2");
  stepGroup2Items.forEach((gp) => {
    gp.addEventListener("click", () => {
      stepGroup2.style.display = "none";
      stepGroup3.style.display = "block";
      step3.classList.add("active");
      window.history.pushState({ currentState: "3" }, null, "?step=3");
    });
  });
  // Form Reload disabled
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  // Step Next 1
  const StepNext1 = document.getElementById("step-next-1");
  StepNext1.addEventListener("click", () => {
    stepGroup3.style.display = "none";
    stepGroup4.style.display = "block";
    step4.classList.add("active");
    window.history.pushState({ currentState: "4" }, null, "?step=4");
  });
  // Step Next 2
  const StepNext2 = document.getElementById("step-next-2");
  StepNext2.addEventListener("click", () => {
    stepGroup4.style.display = "none";
    stepGroup5.style.display = "block";
    step5.classList.add("active");
    window.history.pushState({ currentState: "5" }, null, "?step=5");
  });
  // Step Next 3
  const StepNext3 = document.getElementById("step-next-3");
  const progressBar = document.querySelector(".progress-bar");
  StepNext3.addEventListener("click", () => {
    progressBar.style.display = "none";
    stepGroup5.style.display = "none";
    stepGroup6.style.display = "block";
    window.history.pushState({ currentState: "0" }, null, "?step=0");
  });
  // console.log("")
});

window.addEventListener("popstate", (e) => {
  switch (e.state.currentState) {
    case "1":
      stepGroup1.style.display = "block";
      stepGroup2.style.display = "none";
      stepGroup3.style.display = "none";
      stepGroup4.style.display = "none";
      stepGroup5.style.display = "none";
      stepGroup6.style.display = "none";
      break;
    case "2":
      stepGroup1.style.display = "none";
      stepGroup2.style.display = "block";
      stepGroup3.style.display = "none";
      stepGroup4.style.display = "none";
      stepGroup5.style.display = "none";
      stepGroup6.style.display = "none";
      break;
    case "3":
      stepGroup1.style.display = "none";
      stepGroup2.style.display = "none";
      stepGroup3.style.display = "block";
      stepGroup4.style.display = "none";
      stepGroup5.style.display = "none";
      stepGroup6.style.display = "none";
      break;
    case "4":
      stepGroup1.style.display = "none";
      stepGroup2.style.display = "none";
      stepGroup3.style.display = "none";
      stepGroup4.style.display = "block";
      stepGroup5.style.display = "none";
      stepGroup6.style.display = "none";
    case "5":
      stepGroup1.style.display = "none";
      stepGroup2.style.display = "none";
      stepGroup3.style.display = "none";
      stepGroup4.style.display = "none";
      stepGroup5.style.display = "block";
      stepGroup6.style.display = "none";
    case "6":
      stepGroup1.style.display = "none";
      stepGroup2.style.display = "none";
      stepGroup3.style.display = "none";
      stepGroup4.style.display = "none";
      stepGroup5.style.display = "none";
      stepGroup6.style.display = "block";
  }
  console.log("e", e.state);
});

// page redirect
const link = [
  "ratesfees",
  "frequentlyaskedquestions-faq",
  "consumer-advisory",
  "unsubscribe",
  "apply",
  "form-page",
  "compare-personal-loans",
];
link.forEach((l) => {
  if (location.pathname.includes(l)) {
    location.replace("index.html");
  }
});
// maigrate new site
const migrate = ["howitworks", "terms", "privacypolicy", "aboutus"];
migrate.forEach((l) => {
  if (location.pathname.includes(l)) {
    location.href = `https://pockbox.com/${l}`;
  }
});

// mobile menu
const icon = document.getElementById("toggler__icon");
const menu = document.getElementById("nav__list");
const closeBtn = document.getElementById("close__btn");
icon.addEventListener("click", () => {
  console.log("click");
  menu.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
