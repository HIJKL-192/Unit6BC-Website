// Get elements
const form = document.getElementById("contactForm");
const sound = document.getElementById("submitSound");

// Form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page refresh

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (name === "") {
    alert("Name is required");
    return;
  }

  if (email === "") {
    alert("Email is required");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email");
    return;
  }

  if (message === "") {
    alert("Message cannot be empty");
    return;
  }

  // Get radio button value
  const urgency = document.querySelector('input[name="urgency"]:checked');

  // Output (for testing)
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  console.log("Urgency:", urgency ? urgency.value : "Not selected");

  // Play sound
  sound.play();

  // Success message
  alert("Form submitted successfully!");

  // Reset form
  form.reset();
});