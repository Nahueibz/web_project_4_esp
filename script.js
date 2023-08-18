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

function deleteCard(evt){
    evt.target.closest(".card").remove();
}

function openPopup(){
    popup.classList.add("popup__opened");    
};
function closePopup(){
    popup.classList.remove("popup__opened");
};
function openPopupCard(){
    containerPopupCard.classList.add("popup__opened")
};
function closePopupTarget(){
    containerPopupCard.classList.remove("popup__opened");
};
function submitButtonFunction(evt){
    evt.preventDefault();
    titleProfile.textContent = nameInput.value;
    subtitleProfile.textContent = jobInput.value;
    closePopup();
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

function addCard(evt){
    evt.preventDefault();
    containerCards.insertAdjacentHTML("beforeend",  `<div class="card">
    <img class="card__image" src="${imageCardInput.value}" alt="Valle de Yosemite">
    <img class="card__trash-image" src="images/Trash.png" alt="Imagen tacho de basura">
    <div class="card__info">
    <h3 class="card__text">${nameCardInput.value}</h3>
    <div class="card__like"></div>
    </div></div>`)
    let newCard = containerCards.lastElementChild;
    let trashButton = newCard.querySelector(".card__trash-image");
    trashButton.addEventListener("click", deleteCard);

    let likeButtons = newCard.querySelector(".card__like");
    likeButtons = newCard.addEventListener("click", likeDark);
    }
imageCardContent.value = "";
titleCardContent.value = "";


controlButtonCard.addEventListener("click", addCard, closePopupTarget);
containerPopup.addEventListener("submit", submitButtonFunction);
openProfileButton.addEventListener("click", openPopup);
closeProfileButton.addEventListener("click", closePopup);
openCardPopup.addEventListener("click", openPopupCard);
closePopupCard.addEventListener("click", closePopupTarget);

