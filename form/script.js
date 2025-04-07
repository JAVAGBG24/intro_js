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
  const showDomBtn = document.getElementById("showDomBtn");
  const resultContainer = document.getElementById("resultContainer");
  const resultContent = document.getElementById("resultContent");
  const domTree = document.getElementById("dom-tree");

  // lyssna på submit händelsen för formuläret
  form.addEventListener("submit", function (event) {
    // förhindra browsern standardbeteende (sid-reload direkt)
    event.preventDefault();

    // validera formuläret
    if (validateForm()) {
      // visa resultatet under formuläret
      displayResult();
    }
  });

  // validering
  function validateForm() {
    let isValid = true;

    // validera namn
    if (nameInput.value.trim() === "") {
      showError("name-error");
      isValid = false;
    } else {
      hideError("name-error");
    }

    // validera e-post
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      showError("email-error");
      isValid = false;
    } else {
      hideError("email-error");
    }

    // validera ålder
    const age = parseInt(this.value);
    if (!isNaN(age) && age < 18 && age > 100) {
      showError("age-error");
      isValid = false;
    } else {
      hideError("age-error");
    }

    // validera intresse
    if (interestInput.value === "") {
      showError("interest-error");
      isValid = false;
    } else {
      hideError("interest-error");
    }

    return isValid;
  }

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

  // funktion för att visa resultat från formulär
  function displayResult() {
    // sparar datan från formuläret innan vi återställer det
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      age: ageInput.value,
      interest: interestInput.value,
    };

    // använda DOM för att skapa och lägga till resultat element
    resultContent.innerHTML = "";

    // skapa resultat element för varje fält
    const fields = [
      { label: "Name", value: formData.name },
      { label: "Email", value: formData.email },
      { label: "Age", value: formData.age },
      { label: "Interest", value: getInterestText(formData.interest) },
    ];

    // loopa igenom alla fälten i datan vi tog emot
    fields.forEach((field) => {
      // skapa ett nytt element
      const resultItem = document.createElement("div");
      resultItem.className = "result-item";
      resultItem.innerHTML = `<strong>${field.label}</strong> <span>${field.value}</span>`;

      // läga till elementet i DOM trädet
      resultContent.appendChild(resultItem);

      setTimeout(() => {
        const span = resultItem.querySelector("span");
        span.classList.add("highlight");

        setTimeout(() => {
          span.classList.remove("highlight");
        }, 1500);
      }, 300);
    });

    // visa reultatet

    // återställa formuläret efter att det skickats in och visats
  }

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
});
