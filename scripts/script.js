// Maz Radwan Sprint 1 FrontEnd Dev

document.addEventListener("DOMContentLoaded", () => {
  // Slide in Animation
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate");
          }, 100 * index);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01 }
  );

  const sectionsToObserve = [
    ".food-section .food-item",
    ".meet-gary-container > *",
    ".staying-in-info",
    ".staying-in-image",
    ".testimonial-container .testimonial-box",
  ];

  sectionsToObserve.forEach((selector) => {
    document.querySelectorAll(selector).forEach((item) => {
      observer.observe(item);
    });
  });

  //  button click event for order online button TRY IT!
  const orderButton = document.querySelector(".order-online-button");
  const confirmationMessage = document.getElementById("orderConfirmation");

  if (orderButton) {
    orderButton.addEventListener("click", (e) => {
      e.preventDefault();

      // Display the confirmation message
      if (confirmationMessage) {
        confirmationMessage.style.display = "block";

        setTimeout(() => {
          window.location.href = "../pages/ordering.html";
        }, 1000);
      }
    });
  }
});
