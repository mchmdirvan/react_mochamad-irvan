// Function to validate the form
function validateForm(event) {
  const form = event.target;
  const productNameInput = form.querySelector("#productName");
  const productNameError = form.querySelector("#productNameError");

  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  if (productNameInput.value.length > 25) {
    productNameError.textContent =
      "Product Name must not exceed 25 characters.";
    productNameInput.classList.add("is-invalid");

    event.preventDefault();
  } else {
    productNameError.textContent = "Please enter a valid Prouct name";
  }

  form.classList.add("was-validated");
}

// Add event listeners to all forms with class "needs-validation"
const forms = document.querySelectorAll(".needs-validation");

forms.forEach(function (form) {
  form.addEventListener("submit", validateForm);
});
