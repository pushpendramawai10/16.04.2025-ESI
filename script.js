/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  background: #f4fdf6;
  color: #333;
}

/* Header & Navbar */
header {
  background: #2e7d32;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
nav {
  display: flex;
  gap: 1rem;
}
nav a {
  color: white;
  text-decoration: none;
}
.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Hero Section */
#home {
  text-align: center;
  padding: 3rem 1rem;
  background: #a5d6a7;
}
#home h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.btn {
  background: #2e7d32;
  color: white;
  padding: 0.7rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  display: inline-block;
  border: none;
  cursor: pointer;
}

/* Courses */
#courses {
  padding: 2rem 1rem;
  text-align: center;
}
.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.course-card {
  padding: 1.5rem;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
}

/* About */
#about {
  padding: 2rem 1rem;
  background: #e8f5e9;
  text-align: center;
}

/* Contact */
#contact {
  padding: 2rem 1rem;
  text-align: center;
}
#contact-form {
  max-width: 400px;
  margin: auto;
}
#contact-form input,
#contact-form textarea {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
#form-status {
  margin-top: 1rem;
  font-weight: bold;
}

/* Footer */
footer {
  background: #2e7d32;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

/* Modals */
.modal {
  display: none;
  position: fixed;
  z-index: 100;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
}
.modal-content {
  background: #fff;
  margin: 10% auto;
  padding: 2rem;
  max-width: 350px;
  border-radius: 8px;
  text-align: center;
}
.modal-content input {
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.close {
  float: right;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    display: none;
    flex-direction: column;
  }
  nav.show {
    display: flex;
  }
  .menu-toggle {
    display: inline;
  }
}
