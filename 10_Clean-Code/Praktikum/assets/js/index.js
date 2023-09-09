// -->>> Function to validate Product Name input <<<---
function validateProductName(productNameInput, productNameError, event) {
  if (productNameInput.value.length > 25) {
    productNameError.textContent =
      "Product Name must not exceed 25 characters.";
    addValidationClasses(productNameInput);
    event.preventDefault();
  } else if (/[{}@#%]/.test(productNameInput.value)) {
    productNameError.textContent = "Name must not contain symbols.";
    addValidationClasses(productNameInput);
    event.preventDefault();
  } else {
    productNameError.textContent = "Please enter a valid Product Name";
  }
}
//--->>> Function to add validation classes to an input element <<<---
function addValidationClasses(inputElement) {
  inputElement.classList.add("is-invalid");
  inputElement.classList.add("add-red-border");
}

// --->>> Function to validate the form <<<---
function validateForm(event) {
  const form = event.target;
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    disableSubmitButton(form);
  } else {
    enableSubmitButton(form);
  }
  const productNameInput = form.querySelector("#productName");
  const productNameError = form.querySelector("#productNameError");
  validateProductName(productNameInput, productNameError, event);
  form.classList.add("was-validated");
}

//--->>> Function to disable the submit button <<<---
function disableSubmitButton(form) {
  const submitButton = form.querySelector("#submitButton");
  submitButton.setAttribute("disabled", "true");
}
//--->>> Function to enable the submit button <<<---
function enableSubmitButton(form) {
  const submitButton = form.querySelector("#submitButton");
  submitButton.removeAttribute("disabled");
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
