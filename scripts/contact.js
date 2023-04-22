// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", thankYouMessage);

function thankYouMessage() {
  let contactPage = document.getElementById("contact-page");
  let contactform = document.getElementById("contact-form");
  let textReplacement = document.getElementById("text-replace");

  contactPage.removeChild(contactform);

  let thankYouMsg = document.createElement("p");
  thankYouMsg.setAttribute("id", "thank-you-message");
  thankYouMsg.textContent = "Thank you for your message";

  contactPage.replaceChild(thankYouMsg, textReplacement);
  document.getElementById("thank-you-message").style.fontSize = "24px";
  document.getElementById("thank-you-message").style.textAlign = "center";
}

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
