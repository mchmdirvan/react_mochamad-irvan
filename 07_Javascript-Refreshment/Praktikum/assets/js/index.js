// Function to validate the form
function validateForm(event) {
  const form = event.target;
  const productNameInput = form.querySelector("#productName");
  const productNameError = form.querySelector("#productNameError");
  const invalidCharactersPattern = /[{}@#%]/;

  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();

    //control button
    const submitButton = form.querySelector("#submitButton");
    submitButton.setAttribute("disabled", "true");
  } else {
    //control button
    const submitButton = form.querySelector("#submitButton");
    submitButton.removeAttribute("disabled");
  }
  //check the length of product name
  if (productNameInput.value.length > 25) {
    productNameError.textContent =
      "Product Name must not exceed 25 characters.";
    productNameInput.classList.add("is-invalid");
    // add manually border red
    productNameInput.classList.add("red");
    event.preventDefault();

    // check symbol on product name
  } else if (invalidCharactersPattern.test(productNameInput.value)) {
    productNameError.textContent = "Name must not contain symbols.";
    productNameInput.classList.add("is-invalid");
    productNameInput.classList.add("red");
    event.preventDefault();
  } else {
    productNameError.textContent = "Please enter a valid Product Name";
  }
  form.classList.add("was-validated");
}

// Add event listeners to all forms with class "needs-validation"
const forms = document.querySelectorAll(".needs-validation");

forms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    validateForm(event);

    // Check if the form is valid
    if (form.checkValidity()) {
      // Form data
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
