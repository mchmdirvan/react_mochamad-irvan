// ---Function to validate the form---
function validateForm(event) {
  // ---Get the form element and relevant input elements---
  const form = event.target;
  const productNameInput = form.querySelector("#productName");
  const productNameError = form.querySelector("#productNameError");
  const invalidCharactersPattern = /[{}@#%]/;

  //--- If the form is invalid (e.g., required fields are missing)---
  if (!form.checkValidity()) {
    
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

  //---check the length of product name---
  if (productNameInput.value.length > 25) {
    productNameError.textContent =
      "Product Name must not exceed 25 characters.";
    productNameInput.classList.add("is-invalid");
    // Add a red border manually to indicate an error
    productNameInput.classList.add("red");
    event.preventDefault();

    //---Check for invalid characters in the product name---
  } else if (invalidCharactersPattern.test(productNameInput.value)) {
    productNameError.textContent = "Name must not contain symbols.";
    productNameInput.classList.add("is-invalid");
    // Add a red border manually to indicate an error
    productNameInput.classList.add("red");
    event.preventDefault();
  } else {
    productNameError.textContent = "Please enter a valid Product Name";
  }
  //---Add the "was-validated" class to indicate that the form has been validated---
  form.classList.add("was-validated");
}

// Initialize rowNumber to 1
let rowNumber = 1;

//--- Add event listeners to all forms with class "needs-validation"---
const forms = document.querySelectorAll(".needs-validation");

forms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    validateForm(event);

    // ---Check if the form is valid---
    if (form.checkValidity()) {
      //Get Form data
      const productName = form.querySelector("#productName").value;
      const productCategory = form.querySelector("#productCategory").value;
      const imageOfProduct = form.querySelector("#imageOfProduct").value;
      const productFreshness = form.querySelector(
        'input[name="productFreshness"]:checked'
      ).value;
      const additionalDescription = form.querySelector(
        "#additionalDescription"
      ).value;
      const productPrice = form.querySelector("#productPrice").value;

      // ---Display an alert with the form data---
      alert(
        `Product Name: ${productName}\n
        Product Category: ${productCategory}\n
        Image of Product: ${imageOfProduct}\n
        Product Freshness: ${productFreshness}\n
        Additional Description: ${additionalDescription}\n
        Product Price: ${productPrice}\n
        `
      );

      //---Display Table---
      let table = document.getElementsByTagName("table")[0];
      let newRow = table.insertRow(table.rows.length);

      let cel1 = newRow.insertCell(0);
      let cel2 = newRow.insertCell(1);
      let cel3 = newRow.insertCell(2);
      let cel4 = newRow.insertCell(3);
      let cel5 = newRow.insertCell(4);
      let cel6 = newRow.insertCell(5);
      let cel7 = newRow.insertCell(6);

      cel1.innerHTML = rowNumber;
      cel2.innerHTML = productName;
      cel3.innerHTML = productCategory;
      cel4.innerHTML = "defaultName";
      cel5.innerHTML = productFreshness;
      cel6.innerHTML = additionalDescription;
      cel7.innerHTML = productPrice;
      rowNumber++;

      event.preventDefault();
    }
  });
});

document.getElementById("deleteButton").addEventListener("click", function () {
  let table = document.getElementsByTagName("table")[0];
  let lastRow = table.rows[table.rows.length - 1];
  if (lastRow) {
    table.deleteRow(table.rows.length - 1);
    rowNumber--;
  }
});

// Mencari data berdasarkan username
document.getElementById("searchButton").addEventListener("click", function () {
  const searchUsername = prompt("Masukkan Product Name yang ingin dicari:");
  if (searchUsername) {
    let table = document.getElementsByTagName("table")[0];
    let found = false;
    for (let i = 1; i < table.rows.length; i++) {
      let username = table.rows[i].cells[1].textContent; // Ganti indeks dengan indeks kolom username
      if (username === searchUsername) {
        alert(`Data ditemukan:\n${table.rows[i].innerText}`);
        found = true;
        break;
      }
    }
    if (!found) {
      alert("Data tidak ditemukan.");
    }
  }
});
