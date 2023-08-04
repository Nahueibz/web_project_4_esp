// // Busquemos el formulario en el DOM
// let formElement = document.querySelector(.popup__container);
// console.log(formElement); 



// // Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// // no se enviará en ningún sitio todavía

// // Observa que el nombre de la función comienza con un verbo
// // y describe exactamente lo que hace la función
// function handleProfileFormSubmit(evt) {
//     // Esta línea impide que el navegador
//     // entregue el formulario en su forma predeterminada.
//     evt.preventDefault();
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
// formElement.addEventListener('submit', handleProfileFormSubmit);
let containerPopup = document.querySelector(".popup");
let openProfileButton = document.querySelector(".profile__bottom");
let closeProfileButton = document.querySelector(".popup__image"); // PREGUNTAR SOBRE querySelectorAll
let likeButton = document.querySelector(".card__like");
let containerPopupCard = document.querySelector(".popup__addcard")
let openCardPopup = document.querySelector(".profile__bottom-add");
let closePopupCard = document.querySelector(".popup__image1");



function openPopup(){
    containerPopup.classList.add("popup__opened");    
};
function closePopup(){
    containerPopup.classList.remove("popup__opened");
};
function likeDark(){
    likeButton.classList.toggle("card__like-dark")
};
function openPopupCard(){
    containerPopupCard.classList.add("popup__opened")
};
function closePopupTarget(){
    containerPopupCard.classList.remove("popup__opened")
};


openProfileButton.addEventListener("click", openPopup);
closeProfileButton.addEventListener("click", closePopup);
likeButton.addEventListener("click", likeDark);
openCardPopup.addEventListener("click", openPopupCard);
closePopupCard.addEventListener("click", closePopupTarget);


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
