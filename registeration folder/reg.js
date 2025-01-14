const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close__modal");
const registerationForm = document.getElementById("Registeration__form");

console.log(modal, overlay, btnCloseModal, registerationForm);

registerationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.classList.remove("hidden__modal");
  overlay.classList.remove("hidden__overlay");
  alert("money");
});
