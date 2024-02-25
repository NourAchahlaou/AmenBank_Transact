/* ***************side nav************ */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function openNavcontact() {
  document.getElementById("myNavcontact").style.width = "100%";
}

function closeNavcontact() {
  document.getElementById("myNavcontact").style.width = "0%";
}
function openNavplus() {
  document.getElementById("myNavplus").style.width = "100%";
}

function closeNavplus() {
  document.getElementById("myNavplus").style.width = "0%";
}
/* ***************side nav************ */
/* ***************** popup******************* */
window.addEventListener("load", function () {
  setTimeout(function open() {
    document.querySelector(".popup").style.display = "block";
  }, 1000);
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
/* drop down */
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
/* ****************************************************************************/

document.getElementById("otpbtn").addEventListener("click", function (event) {
  event.preventDefault();

  // Get form data
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Create a data object with the form data
  const data = {
    username: username,
    password: password,
  };

  // Send a POST request to your Spring Boot backend
  fetch("http://localhost:8082/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
      .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Login failed. Server returned an error.");
    }
  })
      .then((user) => {
        console.log("User Role:", user.role); // Debugging: Log the user's role

        if (user.role === "user") {
          // User is a "user," redirect to virement.html
          window.location.href = "virement.html";
        } else if (user.role === "admin") {
          // User is an "admin," redirect to otp.html
          window.location.href = "dashboard.html";
        } else {
          // Unknown role, handle accordingly
          alert("Unknown user role. Please contact support.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Login failed. An error occurred during the login process.");
      });
});