document.addEventListener("DOMContentLoaded", function () {
  function visualizeDom() {
    domVisElement.textContent("DOM visualization");
    bodyElement.appendChild(domVisElement);

    console.log("DOM visualization");
  }

  // för att DOM ska fatta vilket element vi vill koppla till
  // måste vi skapa en "connection"
  const form = document.getElementById("userForm");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const ageInput = document.getElementById("ageInput");
  const interestInput = document.getElementById("interestInput");

  // lägga till input-events så att vi kan illustrera realtidsvalidering
  nameInput.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      hideError("name-error");
    }
  });

  emailInput.addEventListener("input", function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(this.value)) {
      hideError("email-error");
    }
  });

  ageInput.addEventListener("input", function () {
    const age = parseInt(this.value);
    if (!isNaN(age) && age >= 18 && age <= 100) {
      hideError("age-error");
    }
  });

  interestInput.addEventListener("change", function () {
    if (this.value !== "") {
      hideError("interest-error");
    }
  });

  // dölj error funktion
  function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = "none";

    // återställ input elementets style
    const inputId = id.replace("-error", "");
    const inputElement = document.getElementById(inputId);
    inputElement.style.borderColor = "#ddd";
  }

  // visa error funktion
  function showError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = "block";

    // hitta relaterat input element och markera det
    const inputId = id.replace("-error", "");
    const inputElement = document.getElementById(inputId);
    inputElement.style.borderColor = "#e74c3c";
  }

  // validering
  function validateForm() {
    // validera namn
    if (nameInput.value.trim() === "") {
      showError("name-error");
    } else {
      hideError("name-error");
    }

    // validera e-post
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      showError("email-error");
    } else {
      hideError("email-error");
    }

    // validera ålder
    const age = parseInt(this.value);
    if (!isNaN(age) && age < 18 && age > 100) {
      showError("age-error");
    } else {
      hideError("age-error");
    }

    // validera intresse
    if (interestInput.value === "") {
      showError("interest-error");
    } else {
      hideError("interest-error");
    }
  }
});
