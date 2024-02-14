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

const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ];

  function generateCard (name, link) {
    const cardTemplate = document.querySelector("#card-template");
    const card = document.importNode(cardTemplate.content, true);
    const cardImage = card.querySelector(".card__image");
    cardImage.addEventListener("click", showImage);
    const cardText = card.querySelector(".card__text");
    const trashButton = card.querySelector(".card__trash-image");
    trashButton.addEventListener("click", deleteCard);
    const likeButton = card.querySelector(".card__like");
    likeButton.addEventListener("click", toggleLikeStatus);
  

    cardImage.src = link;
    cardText.textContent = name;
    return card;
  }

  initialCards.forEach(function (element) {
   const cardNew = generateCard(element.name, element.link);
   containerCards.append(cardNew);
  })

function showImage(){
  containerPopup.classList.add(".popup__opened");
}  

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
    containerCards.prepend(newCard);

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

