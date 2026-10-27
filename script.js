const formulaire = document.getElementById("formulaireContact");
const messageContact = document.getElementById("messageContact");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  const nom = document.getElementById("champNom").value.trim();
  const email = document.getElementById("champEmail").value.trim();
  const texte = document.getElementById("champMessage").value.trim();

  if (nom === "" || email === "" || texte === "") {
    messageContact.textContent = "Merci de remplir tous les champs 🌸";
  } else {
    messageContact.textContent = "Merci " + nom + ", ton message est bien reçu ! 🌸";
  }
});