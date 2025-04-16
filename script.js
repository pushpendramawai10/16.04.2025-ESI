function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('show');
}

function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (name && email && message) {
    status.textContent = "Thank you for your message!";
    status.style.color = "green";
  } else {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
  }
  return false; // prevent actual form submission
}
