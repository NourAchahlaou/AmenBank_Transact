const codes = document.querySelectorAll(".otp-code");

codes[0].focus();
codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const otpButton = document.getElementById("otpbtn");

  otpButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the button

    // Get the OTP code inputs
    const otpCodeInputs = document.querySelectorAll(".otp-code");

    // Combine OTP digits from all input fields
    let otpCode = "";
    otpCodeInputs.forEach((input) => {
      otpCode += input.value;
    });

    // Perform OTP code validation

    // Handle OTP validation error, display messages, etc.
    if (otpCode.length === 5) {
      // Assuming your OTP validation is successful, you can proceed
      // For now, let's simulate a brief delay before redirecting
      setTimeout(function () {
        window.location.href = "virement.html"; // Replace with the actual URL of the next page
      }, 500); // Delay for 1 second (adjust as needed)
    } else {
      // Handle OTP validation error, display messages, etc.
      console.log("Please enter a valid 5-digit OTP code.");
      console.log("OTP Code Length: " + otpCode.length);
    }
  });
});
