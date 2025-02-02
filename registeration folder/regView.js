const registerationForm = document.querySelector(".RegisterationForm");
const popUpContainer = document.querySelector(".popup-container");
const CloseRegModal = document.querySelector(".closeModal");
const messageContainer = document.querySelector(".message-container");
console.log(CloseRegModal);

console.log(registerationForm);

const generateHTML = function (name) {
  return `
  <h2>Thank You!</h2>
    <p>
      We now have your details <span>${name}</span>. You can now login.
    </p>`;
};

const closePopup = function () {
  CloseRegModal.addEventListener("click", function (e) {
    e.preventDefault();
    popUpContainer.classList.remove("Open-popup");
    window.location.href = "../Orthosprint App/indexA.html";
  });
};

closePopup();

const customers = [];

console.log(customers);
registerationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(this);
  console.log(data);

  const firstName = data.get("firstName");
  const lastName = data.get("lastName");
  const address = data.get("address");
  const phoneNumber = data.get("phoneNumber");
  const username = data.get("username");
  const email = data.get("email");
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");

  const gender = data.get("gender");

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again");
    return;
  }

  customers.push({
    firstName,
    lastName,
    address,
    phoneNumber,
    username,
    email,
    password,
  });

  messageContainer.innerHTML = generateHTML(firstName);
  popUpContainer.classList.add("Open-popup");
  console.log(customers);
});
