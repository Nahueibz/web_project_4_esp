const popup = document.querySelector(".popup");
const containerPopup = document.querySelector(".popup__container");
const openProfileButton = document.querySelector(".profile__bottom");
const closeProfileButton = document.querySelector(".popup__image"); 
const nameInput = document.querySelector(".control__form");
const jobInput = document.querySelector(".control__form1");
const titleProfile = document.querySelector(".profile__title");
const subtitleProfile = document.querySelector(".profile__subtitle");

const containerPopupCard = document.querySelector(".popup__addcard");
const closePopupCard = document.querySelector(".popup__image1");
const openCardPopup = document.querySelector(".profile__bottom-add");
const cardsContent = document.querySelector(".card");
const trashButtons = document.querySelectorAll(".card__trash-image");
const likeButtons = document.querySelectorAll(".card__like");

const containerCards = document.querySelector(".cards");
const imageCardContent = document.querySelector(".card__image");
const titleCardContent = document.querySelector(".card__text");
const nameCardInput = document.querySelector(".control__form-card");
const imageCardInput = document.querySelector(".control__form-card1");
const controlButtonCard = document.querySelector(".control__button-card");


function openPopup(elementPopup){
    elementPopup.classList.add("popup__opened");
}

function closePopup(elementPopup){
    elementPopup.classList.remove("popup__opened");
}

function deleteCard(evt){
    evt.target.closest(".card").remove();
}
function submitButtonFunction(evt){
    evt.preventDefault();
    titleProfile.textContent = nameInput.value;
    subtitleProfile.textContent = jobInput.value;
    closePopup(popup);
}
function toggleLikeStatus(evt) {
    evt.target.classList.toggle("card__like-dark");
}

likeButtons.forEach(function(likeButton) {
    likeButton.addEventListener("click", toggleLikeStatus);
});
trashButtons.forEach(function(trashButton){
    trashButton.addEventListener("click", deleteCard);
});   

function addCard(evt) {
    evt.preventDefault();
    const cardTemplate = document.querySelector("#card-template");
    const newCard = document.importNode(cardTemplate.content, true);
    const cardImage = newCard.querySelector(".card__image");
    const cardText = newCard.querySelector(".card__text");
  
    cardImage.src = imageCardInput.value;
    cardText.textContent = nameCardInput.value;
  
    const trashButton = newCard.querySelector(".card__trash-image");
    trashButton.addEventListener("click", deleteCard);
  
    const likeButton = newCard.querySelector(".card__like");
    likeButton.addEventListener("click", toggleLikeStatus);
    containerCards.appendChild(newCard);

    closePopup(containerPopupCard);
    imageCardInput.value = "";
    nameCardInput.value = "";
  }
  
  controlButtonCard.addEventListener("click", addCard);
  


controlButtonCard.addEventListener("click", addCard);
containerPopup.addEventListener("submit", submitButtonFunction);
closeProfileButton.addEventListener("click", function () {closePopup(popup)});
openProfileButton.addEventListener("click", function () {openPopup(popup)});
openCardPopup.addEventListener("click", function () {openPopup(containerPopupCard)});
closePopupCard.addEventListener("click", function (){closePopup(containerPopupCard)});

