const submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("click", handleSubmit);

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

function handleSubmit(event) {
  event.preventDefault();
  const form = document.querySelector("form");
  const formData = getFormData(form);
  displayFormData(formData);
}
