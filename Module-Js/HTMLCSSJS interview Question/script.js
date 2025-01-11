// Boilerplate JavaScript for handling rating logic

// Initialize data for ratings
let ratings = [0, 0, 0, 0, 0]; // To store counts for each rating
let totalRatings = 0;

// Function to update ratings and progress bars
function updateRatings() {
  // Logic to calculate and update progress bars
}

// Function to handle click events on stars
function handleStarClick(event) {
  // Logic to handle rating selection
  const rating = parseInt(event.target.dataset.index);
  ratings[rating - 1] += 1;
  totalRatings++;

  const stars = document.querySelectorAll("#stars button");
  stars.forEach((star, index) => {
      if (index < rating) {
          star.classList.add("selected");
          console.log(ratings);
          console.log(totalRatings);
    } else {
      star.classList.remove("selected");
    }
  });
}


// Add event listeners to stars
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll("#stars button");
  stars.forEach((star) => {
    star.addEventListener("click", handleStarClick);
  });
});
