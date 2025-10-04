// script sa nav
    // Get the logout button
    const logoutBtn = document.getElementById("logoutBtn");

    // Add click event
    logoutBtn.addEventListener("click", function(event) {
      event.preventDefault(); // para hindi agad mag-redirect
      let confirmLogout = confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        // Redirect to login.html
        window.location.href = "LOGIN.html";
      }
    });

// script sa services

document.addEventListener("DOMContentLoaded", function () {
  const services = document.querySelectorAll(".service-box");

  services.forEach(box => {
    box.addEventListener("click", function () {
      let title = box.querySelector("h3").textContent.trim();

      if (title === "General Check Up") {
        window.location.href = "General Check Up.html";
      } else if (title === "Vaccinations") {
        window.location.href = "Vaccinations.html";
      } else if (title === "Newborn Care") {
        window.location.href = "Newborn Care.html";
      } else if (title === "Nutrition Counseling") {
        window.location.href = "Nutrition Counseling.html";
      }
    });
  });
});
