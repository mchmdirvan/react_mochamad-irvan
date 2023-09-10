// -->>> Function to validate Product Name input <<<
function validateProductName(productNameInput, productNameError, event) {
  const inputValue = productNameInput.value;

  if (inputValue.length < 6) {
    productNameError.textContent = "Please enter a valid Product Name";
    addValidationClasses(productNameInput);
    event.preventDefault();
  } else if (inputValue.length > 25) {
    productNameError.textContent =
      "Product Name must not exceed 25 characters.";
    addValidationClasses(productNameInput);
    event.preventDefault();
  } else if (/[{}@#%]/.test(inputValue)) {
    productNameError.textContent = "Name must not contain symbols.";
    addValidationClasses(productNameInput);
    event.preventDefault();
  } else {
    productNameError.textContent = "";
    removeValidationClasses(productNameInput);
  }
}

//--->>> Function to validation classes to an input element <<<---
function addValidationClasses(inputElement) {
  inputElement.classList.add("is-invalid");
  inputElement.classList.add("add-red-border");
}
function removeValidationClasses(inputElement) {
  inputElement.classList.remove("is-invalid");
  inputElement.classList.remove("add-red-border");
}
/** --->>> Function to validate the form <<<---
 * Validates the product name input and handles error messaging.
 * @param {Event} event - The form submission event.
 * @param {HTMLInputElement} productNameInput - The input element for the product name.
 * @param {HTMLElement} productNameError - The element to display error messages.
 */
function validateForm(event) {
  const form = event.target;
  const productNameInput = form.querySelector("#productName");
  const productNameError = form.querySelector("#productNameError");

  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  validateProductName(productNameInput, productNameError, event);
  form.classList.add("was-validated");
}

// --->> Event listener for form submission <<<---
const forms = document.querySelectorAll(".needs-validation");
forms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    validateForm(event);

    // Check if the form is valid
    if (form.checkValidity()) {
      const formData = getFormData(form);
      displayFormData(formData);
      displayTableData(formData);
      event.preventDefault();
    }
  });
});

// --->>> Function to get form data <<<---
function getFormData(form) {
  return {
    productName: form.querySelector("#productName").value,
    productCategory: form.querySelector("#productCategory").value,
    imageOfProduct: form.querySelector("#imageOfProduct").value,
    productFreshness: form.querySelector(
      'input[name="productFreshness"]:checked'
    ).value,
    additionalDescription: form.querySelector("#additionalDescription").value,
    productPrice: form.querySelector("#productPrice").value,
  };
}

//--->>> Function to display form data in an alert <<<---
function displayFormData(formData) {
  alert(
    `Product Name: ${formData.productName}\n
    Product Category: ${formData.productCategory}\n
    Image of Product: ${formData.imageOfProduct}\n
    Product Freshness: ${formData.productFreshness}\n
    Additional Description: ${formData.additionalDescription}\n
    Product Price: ${formData.productPrice}\n`
  );
}

// --->>> Function to display table data <<<---
function displayTableData(formData) {
  const table = document.querySelector("table");
  const currentRowCount = table.rows.length;
  const newRow = table.insertRow(currentRowCount);
  const cellData = [
    currentRowCount,
    formData.productName,
    formData.productCategory,
    "defaultName", // for Image of Product
    formData.productFreshness,
    formData.additionalDescription,
    formData.productPrice,
  ];

  for (let i = 0; i < cellData.length; i++) {
    const cell = newRow.insertCell(i);
    cell.innerHTML = cellData[i];
  }
}

//--->>> Event listener for the delete button <<<---
document.getElementById("deleteButton").addEventListener("click", function () {
  const table = document.querySelector("table");
  const lastRow = table.rows[table.rows.length - 1];
  if (lastRow) {
    table.deleteRow(table.rows.length - 1);
    rowNumber--;
  }
});

//--->>> Event listener for the search button <<<---
document.getElementById("searchButton").addEventListener("click", function () {
  const searchProductName = prompt("Enter Product Name to search:");
  if (searchProductName) {
    const table = document.querySelector("table");
    let found = false;
    for (let i = 1; i < table.rows.length; i++) {
      const productName = table.rows[i].cells[1].textContent;
      if (productName === searchProductName) {
        alert(`Data found:\n${table.rows[i].innerText}`);
        found = true;
        break;
      }
    }
    if (!found) {
      alert("Data not found.");
    }
  }
});
