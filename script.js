let popup = document.querySelector(".popup");
let containerPopup = document.querySelector(".popup__container");
let openProfileButton = document.querySelector(".profile__bottom");
let closeProfileButton = document.querySelector(".popup__image"); 
let containerPopupCard = document.querySelector(".popup__addcard")
let openCardPopup = document.querySelector(".profile__bottom-add");
let closePopupCard = document.querySelector(".popup__image1");
let changeNameProfile = document.querySelector(".control__form");
let nameInput = document.querySelector(".control__form");
let jobInput = document.querySelector(".control__form1");
let submitButton = document.querySelector(".control__button");
let titleProfile = document.querySelector(".profile__title");
let subtitleProfile = document.querySelector(".profile__subtitle");
let cardsContent = document.querySelector(".card");
let trashButtons = document.querySelectorAll(".card__trash-image");
let likeButtons = document.querySelectorAll(".card__like");
let containerCards = document.querySelector(".cards");
let imageCardContent = document.querySelector(".card__image");
let titleCardContent = document.querySelector(".card__text");
let nameCardInput = document.querySelector(".control__form-card");
let imageCardInput = document.querySelector(".control__form-card1");
let controlButtonCard = document.querySelector(".control__button-card");

// function closePopupCardFunc(){
//     closePopup();
// }
controlButtonCard.addEventListener("click", closePopup);
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
function likeDark(evt) {
    evt.target.classList.toggle("card__like-dark");
}

likeButtons.forEach(function(likeButton) {
    likeButton.addEventListener("click", likeDark);
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


controlButtonCard.addEventListener("click", addCard);
containerPopup.addEventListener("submit", submitButtonFunction);
openProfileButton.addEventListener("click", openPopup);
closeProfileButton.addEventListener("click", closePopup);
openCardPopup.addEventListener("click", openPopupCard);
closePopupCard.addEventListener("click", closePopupTarget);

