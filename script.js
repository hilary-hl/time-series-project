const buttons = document.querySelectorAll(".toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    details.hidden = isOpen;
  });
});