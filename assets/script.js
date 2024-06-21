// Définition des slides (diapo)
const slides = [
	{
		"image": "slide1.jpg", // affiche image 1
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>" // Montre le texte "Impressions tous formats" en grand et "en boutique et en ligne" en petit
	},
	{
		"image": "slide2.jpg", // affiche image 2
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>" // Montre le texte "Tirages haute définition grand format" en grand et "pour vos bureaux et events" en petit
	},
	{
		"image": "slide3.jpg", // affiche image 3
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>" // Montre le texte "Grand choix de couleurs" en grand et "de CMJN aux pantones" en petit
	},
	{
		"image": "slide4.png", // affiche image 4
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>" // Montre le texte "Autocollants" en grand et "avec découpe laser sur mesure" en petit
	}
]
console.log(slides); // affiche dans la console pour que je puisse voir qu'est ce qu'il y a dans cette liste

// Sélection des éléments HTML
const arrowRight = document.querySelector(".arrow_right") // Imagine une flèche à droite sur une page web. Cette ligne de code dit : "Va chercher la flèche à droite sur la page" et la met dans la boîte appelée arrowRight.
const arrowLeft = document.querySelector(".arrow_left") // Imagine une flèche à gauche sur une page web. Cette ligne de code dit : "Va chercher la flèche à gauche sur la page" et la met dans la boîte appelée arrowLeft.
const dotsContainer = document.querySelector(".dots") // Imagine des petits points (comme des boutons) en bas de la page. Cette ligne de code dit : "Va chercher ces petits points" et les met dans la boîte appelée dotsContainer.
const img = document.querySelector(".banner-img"); // Imagine une grande image (comme une bannière) sur la page. Cette ligne de code dit : "Va chercher cette grande image" et la met dans la boîte appelée img.
const tagLine = document.querySelector("#banner p"); // Imagine une phrase ou un texte court sous l'image de la bannière. Cette ligne de code dit : "Va chercher ce texte sous l'image de la bannière" et le met dans la boîte appelée tagLine.
let index = 0 // Crée une boîte appelée index et met le nombre 0 dedans. Ce nombre servira à suivre quelle image ou quel texte est actuellement affiché.

// Gestion des événements de clic
arrowRight.addEventListener("click", () => {
	console.log("Clic sur la flèche droite");
	updateSlide("right")
}) // Ajoute un écouteur d'événement au bouton/flèche de droite (arrowRight). Lorsque ce bouton est cliqué, il appelle la fonction updateSlide avec l'argument "right".

arrowLeft.addEventListener("click", () => {
	console.log("Clic sur la flèche gauche");
	updateSlide("left")
}) // Ajoute un écouteur d'événement au bouton/flèche de gauche (arrowLeft). Lorsque ce bouton est cliqué, il appelle la fonction updateSlide avec l'argument "left".

// Ajout des points de navigation (dots)
function ajoutDot() { // Définit une fonction nommée ajoutDot.
	for (let i = 0; i < slides.length; i++) { // Boucle à travers tous les éléments du tableau slides (où slides est probablement un tableau contenant les différentes diapositives).
		const dot = document.createElement("span"); // Crée un nouvel élément span et le stocke dans la variable dot.
		dot.classList.add("dot"); // Ajoute la classe CSS "dot" à l'élément span créé, probablement pour le styliser en tant que point.
		dotsContainer.appendChild(dot); // Ajoute l'élément span (le point) à l'élément parent dotsContainer.
		if (i == index) { // Si l'index actuel de la boucle (i) est égal à la variable index (qui doit représenter la diapositive actuellement affichée), ajoute la classe CSS "dot_selected" à ce point pour indiquer qu'il est actuellement sélectionné.
			dot.classList.add("dot_selected")
		}
	}
}
ajoutDot(); // Appelle la fonction ajoutDot pour ajouter immédiatement les points lorsque le script est exécuté.

// Changement de diapositive, permet de revenir à la première et à la dernière
function updateSlide(buttonDirection) { // La fonction s'appelle updateSlide et prend un argument buttonDirection, qui détermine la direction du changement de diapositive ("right" pour aller à la diapositive suivante, "left" pour revenir à la diapositive précédente).
	if (buttonDirection == "right") { // L'index de la diapositive actuelle (index) est incrémenté de 1 (index++). Ensuite, il vérifie si index a dépassé le dernier indice des diapositives (index > slides.length - 1). Si c'est le cas, cela signifie que l'on a atteint la fin du diaporama, donc index est réinitialisé à 0 pour revenir à la première diapositive (index = 0).
		index++;
		if (index > slides.length - 1) {
			index = 0;
		}
	}
	else if (buttonDirection == "left") { // L'index de la diapositive actuelle (index) est décrémenté de 1 (index--). Ensuite, il vérifie si index est inférieur à 0 (index < 0). Si c'est le cas, cela signifie que l'on a dépassé la première diapositive en arrière, donc index est réinitialisé à l'indice de la dernière diapositive (index = slides.length - 1).

		index--;
		if (index < 0) {
			index = slides.length - 1;
		}
	}
	updateDot() // Enfin, la fonction updateDot est appelée. Bien que la définition de cette fonction ne soit pas incluse ici, on peut supposer qu'elle met à jour les indicateurs de position des diapositives (les "dots") pour refléter la nouvelle diapositive active.
}

// Mise à jour des points de navigation et du contenu de la diapositive
function updateDot() { // Cette fonction est définie sans prendre de paramètres.
	const tableauDot = document.querySelectorAll(".dots .dot"); // sélectionne tous les éléments de la page ayant la classe CSS dot et qui sont des descendants d'un élément avec la classe dots. Le résultat est une NodeList stockée dans la variable tableauDot.
	for (let i = 0; i < tableauDot.length; i++) { // Cette boucle for parcourt chaque élément de tableauDot.
		tableauDot[i].classList.remove("dot_selected") //  À chaque itération de la boucle, tableauDot[i].classList.remove("dot_selected") supprime la classe dot_selected de l'élément courant. Cela signifie que tous les points (dots) vont être désélectionnés (perdre la classe dot_selected).
	}
	tableauDot[index].classList.add("dot_selected"); // Cette ligne ajoute la classe dot_selected à un élément spécifique de tableauDot, identifié par la variable index. Cela marque ce point particulier comme étant sélectionné.
	img.src = `./assets/images/slideshow/${slides[index].image}`
	tagLine.innerHTML = slides[index].tagLine;

}