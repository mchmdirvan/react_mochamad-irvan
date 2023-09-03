// Function to validate the form
function validateForm(event) {
  // Get the form element and relevant input elements
  const form = event.target;
  const productNameInput = form.querySelector("#productName");
  const productNameError = form.querySelector("#productNameError");
  const invalidCharactersPattern = /[{}@#%]/;

  if (!form.checkValidity()) {
    // If the form is invalid (e.g., required fields are missing)
    event.preventDefault();
    event.stopPropagation();

    // Disable the submit button
    const submitButton = form.querySelector("#submitButton");
    submitButton.setAttribute("disabled", "true");
  } else {
    // If the form is valid
    const submitButton = form.querySelector("#submitButton");
    submitButton.removeAttribute("disabled");
  }
  //check the length of product name
  if (productNameInput.value.length > 25) {
    productNameError.textContent =
      "Product Name must not exceed 25 characters.";
    productNameInput.classList.add("is-invalid");
    // Add a red border manually to indicate an error
    productNameInput.classList.add("red");
    event.preventDefault();

    // Check for invalid characters in the product name
  } else if (invalidCharactersPattern.test(productNameInput.value)) {
    productNameError.textContent = "Name must not contain symbols.";
    productNameInput.classList.add("is-invalid");
    // Add a red border manually to indicate an error
    productNameInput.classList.add("red");
    event.preventDefault();
  } else {
    productNameError.textContent = "Please enter a valid Product Name";
  }
    // Add the "was-validated" class to indicate that the form has been validated
  form.classList.add("was-validated");
}

// Add event listeners to all forms with class "needs-validation"
const forms = document.querySelectorAll(".needs-validation");

forms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    validateForm(event);

    // Check if the form is valid
    if (form.checkValidity()) {
      //Get Form data
      const productName = form.querySelector("#productName").value;
      const productCategory = form.querySelector("#productCategory").value;
      const additionalDescription = form.querySelector(
        "#additionalDescription"
      ).value;
      const productPrice = form.querySelector("#productPrice").value;
      const productFreshness = form.querySelector(
        'input[name="productFreshness"]:checked'
      ).value;

      // Display an alert with the form data
      alert(
        `Product Name: ${productName}\nProduct Category: ${productCategory}\nAdditional Description: ${additionalDescription}\nProduct Price: ${productPrice}\nProduct Freshness: ${productFreshness}`
      );
    }
  });
});
