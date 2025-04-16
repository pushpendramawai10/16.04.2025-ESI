function openModal(type) {
  document.getElementById(type + "-modal").style.display = "block";
}

function closeModal(type) {
  document.getElementById(type + "-modal").style.display = "none";
}

function signupUser() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Sign-up successful!");
      closeModal('signup');
    })
    .catch(error => alert(error.message));
}

function loginUser() {
  const email = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      closeModal('login');
    })
    .catch(error => alert(error.message));
}
