const heartButtons = document.querySelectorAll(".heart-button");

const totalClicks = document.getElementById("total-clicks");

let totalCount = 0;

// This code adds the clicking option for each individual heart button
heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const countSpan = button.nextElementSibling;
    countSpan.textContent = parseInt(countSpan.textContent) + 1;

    // Increases the amount of clicks that a user can do for an image. This allows the user to easily click the heart button as many times as they want, creating a game-like effect and easy usability when clicking.
    totalCount++;
    totalClicks.textContent = `Total Clicks: ${totalCount}`;

    // the addition of the "pop" animation feature allows the heart to move up and down for a quick second when the user presses the heart "like" button.
    // the addition of the  animation prevents the user's "liking" experience (for each picture)from being too plain or boring.
    button.classList.add("pop");

    //   the "animationend" part below allows the heart animation to end after it is clicked ,
    // ( when the user would click on the heart to like an image).
    button.addEventListener(
      "animationend",
      () => {
        button.classList.remove("pop");
      },
      { once: true }
    );
  });
});
