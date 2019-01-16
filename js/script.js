var feedback = document.querySelector(".feedback-form");

var popup = document.querySelector(".write-us");
var close = popup.querySelector(".close-popup");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  name.focus();
  });

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode===27){
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});

var mapLink = document.querySelector(".open-map");

var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".close-popup");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("popup-show")) {
      mapPopup.classList.remove("popup-show");
    }
  }
});

var cartAdd = document.querySelectorAll(".buy");

var cartPopup = document.querySelector(".cart-popup");
var cartClose = cartPopup.querySelector(".close-popup");

cartAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("popup-show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("popup-show")) {
      cartPopup.classList.remove("popup-show");
    }
  }
});
