function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Basic check (you can add real checks later)
  if (user === "admin" && pass === "1234") {
    window.location.href = "home.html";
    return false; // Prevent form submission
  } else {
    alert("Invalid credentials!");
    return false;
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}