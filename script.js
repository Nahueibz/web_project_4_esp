// // Busquemos el formulario en el DOM
let formElement = document.querySelector(".popup__container");
// console.log(formElement); 



// // Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// // no se enviará en ningún sitio todavía

// // Observa que el nombre de la función comienza con un verbo
// // y describe exactamente lo que hace la función
// 
//     // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
//     // Lo explicaremos todo con más detalle después.

//     // Busquemos los campos del formulario en el DOM
//     let nameInput = // Use querySelector()
//     let jobInput = // Use querySelector()

//     // Obtén los valores de cada campo desde la propiedad de valor correspondiente

//     // Selecciona los elementos donde se introducirán los valores de los campos

//     // Inserta nuevos valores utilizando el textContent
//     // propiedad del método querySelector()
// }

// // Conecta el manipulador (handler) al formulario:
// // se observará el evento de entrega
// 
let popup = document.querySelector(".popup");
let containerPopup = document.querySelector(".popup__container");
let openProfileButton = document.querySelector(".profile__bottom");
let closeProfileButton = document.querySelector(".popup__image"); 
let likeButton = document.querySelector(".card__like");
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
let trashButton = document.querySelector(".card__trash-image");


function deleteCard(){
    cardsContent.classList.remove("card");
}
function openPopup(){
    popup.classList.add("popup__opened");    
};
function closePopup(){
    popup.classList.remove("popup__opened");
};
// function likeDark(evt){
//     evt.target.likeButton.classList.toggle("card__like-dark");
    
// };
function openPopupCard(){
    containerPopupCard.classList.add("popup__opened")
};
function closePopupTarget(){
    containerPopupCard.classList.remove("popup__opened")
};
function submitButtonFunction(evt){
    evt.preventDefault();
    titleProfile.textContent = nameInput.value;
    subtitleProfile.textContent = jobInput.value;
    closePopup();
}

trashButton.addEventListener("click", deleteCard);
containerPopup.addEventListener("submit", submitButtonFunction);
openProfileButton.addEventListener("click", openPopup);
closeProfileButton.addEventListener("click", closePopup);
likeButton.addEventListener("click", (evt)=> {
    evt.target.classList.toggle("card__like-dark");
});
openCardPopup.addEventListener("click", openPopupCard);
closePopupCard.addEventListener("click", closePopupTarget);







// function handleProfileFormSubmit(evt) {
//      evt.preventDefault();
//     nameInput.textContent = "Nahuel";
//      jobInput.textContent = "Desarrollador web";
//   };
// function submitButtonText(){
//     nameInput.textContent = "";
//     jobInput.textContent = "";
// }   



// formElement.addEventListener('submit', handleProfileFormSubmit);
// submitButton.addEventListener('submit', submitButtonText);


/* script.js */

// let container = document.querySelector("#container");
// let content = container.querySelector(".content");
// let contentItem = content.querySelector(".content__item");

// console.log(contentItem); // Registrará: <div class="content__item"></div>

// let contentItems = content.querySelectorAll(".content__item");

// console.log(contentItems); /* Registrará todos los elementos con la clase .content__item */
// let container = document.querySelector(".cards");
// let content = container.querySelector(".card");
// let contentItem = content.querySelector(".card__like");
