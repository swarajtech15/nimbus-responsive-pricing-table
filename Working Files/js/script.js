/* =====================================
   NIMBUS BILLING SYSTEM
===================================== */

const billingToggle = document.getElementById("billingToggle");

const proPrice = document.getElementById("proPrice");

const proPeriod = document.getElementById("proPeriod");

const billingLabels = document.querySelectorAll(".billing-label");

const monthlyPrice = 799;

const yearlyPrice = 599;

let isYearly = false;

billingToggle.addEventListener("click", () => {
  isYearly = !isYearly;

  // Update price

  proPrice.textContent = isYearly ? yearlyPrice : monthlyPrice;

  // Update billing period

  proPeriod.textContent = isYearly ? "Per month, billed annually" : "Per month";

  // Animate toggle

  billingToggle.classList.toggle("yearly", isYearly);

  // Update accessibility

  billingToggle.setAttribute("aria-pressed", String(isYearly));

  billingToggle.setAttribute(
    "aria-label",
    isYearly ? "Switch to monthly billing" : "Switch to yearly billing",
  );

  // Update active billing label

  billingLabels[0].classList.toggle("active-label", !isYearly);

  billingLabels[1].classList.toggle("active-label", isYearly);
});

/* =====================================
   SCROLL REVEAL ANIMATIONS
===================================== */

const revealElements = document.querySelectorAll(
  ".section-heading, .pricing-card, .bottom-cta",
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("reveal");

  revealObserver.observe(element);
});
