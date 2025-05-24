// Select all heart buttons
const heartButtons = document.querySelectorAll(".heart-button");

// Select total click counter
const totalClicks = document.getElementById("total-clicks");

// Keep track of total clicks
let totalCount = 0;

// Add click event listener to each heart button
heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Increase individual click count
    const countSpan = button.nextElementSibling;
    countSpan.textContent = parseInt(countSpan.textContent) + 1;

    // Increase total click count
    totalCount++;
    totalClicks.textContent = `Total Clicks: ${totalCount}`;

    // Add animation class
    button.classList.add("pop");

    // Remove the class after the animation ends so it can trigger again next click
    button.addEventListener(
      "animationend",
      () => {
        button.classList.remove("pop");
      },
      { once: true } // Ensures this event listener only runs once per click
    );
  });
});
