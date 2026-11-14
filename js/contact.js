// Contact form validation. This demo validates locally; it does not send a message.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = {
    name: document.getElementById("full-name"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    message: document.getElementById("message")
  };
  const feedback = document.getElementById("contact-feedback");

  function showError(fieldName, message) {
    const field = fields[fieldName];
    document.getElementById(fieldName + "-error").textContent = message;
    field.classList.toggle("invalid", Boolean(message));
    field.setAttribute("aria-invalid", String(Boolean(message)));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    Object.keys(fields).forEach(function (key) {
      const value = fields[key].value.trim();
      let error = "";

      if (!value) {
        error = "This field is required.";
      } else if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Enter a valid email address.";
      } else if (key === "phone" && !/^\d+$/.test(value)) {
        error = "Phone number must contain digits only.";
      }

      showError(key, error);
      if (error) isValid = false;
    });

    if (isValid) {
      feedback.textContent = "All fields are valid. This demonstration form does not send messages to a server.";
      form.reset();
    } else {
      feedback.textContent = "Please correct the highlighted fields and try again.";
    }
  });

  Object.keys(fields).forEach(function (key) {
    fields[key].addEventListener("input", function () {
      if (fields[key].value.trim()) showError(key, "");
    });
  });
});
