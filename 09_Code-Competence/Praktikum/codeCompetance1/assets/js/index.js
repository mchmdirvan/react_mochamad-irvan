const form = document.querySelector("form");
const submitButton = document.querySelector("#submit-btn");

// Function to get form data
function getFormData(form) {
  return {
    firstName: form.querySelector("#firstName").value,
    lastName: form.querySelector("#lastName").value,
    email: form.querySelector("#email").value,
    message: form.querySelector("#message").value,
  };
}

// Function to display form data in an alert
function displayFormData(formData) {
  alert(`
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Message: ${formData.message}
      `);
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const formData = getFormData(form);
  displayFormData(formData);
});
