// On attend que la page soit chargée
document.addEventListener("DOMContentLoaded", function () {

  /* ===== 1) MENU MOBILE ===== */
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("actif-menu");
  });

  /* ===== 2) ANNEE AUTOMATIQUE DANS LE FOOTER ===== */
  const anneeSpan = document.getElementById("annee");
  anneeSpan.textContent = new Date().getFullYear();

  /* ===== 3) VALIDATION DU FORMULAIRE DE CONTACT ===== */
  // Ce formulaire n'existe que dans contact.html,
  // donc on vérifie d'abord qu'il existe pour éviter une erreur console.
  const formulaire = document.getElementById("formContact");

  if (formulaire) {
    const champNom = document.getElementById("nom");
    const champEmail = document.getElementById("email");
    const champMessage = document.getElementById("message");
    const feedback = document.getElementById("feedback");

    formulaire.addEventListener("submit", function (event) {
      event.preventDefault(); // empêche le rechargement de la page

      let formulaireValide = true;

      // Vérification du nom
      if (champNom.value.trim() === "") {
        document.getElementById("erreurNom").textContent = "Le nom est obligatoire.";
        formulaireValide = false;
      } else {
        document.getElementById("erreurNom").textContent = "";
      }

      // Vérification de l'email
      const email = champEmail.value.trim();
      if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        document.getElementById("erreurEmail").textContent = "Veuillez saisir un email valide.";
        formulaireValide = false;
      } else {
        document.getElementById("erreurEmail").textContent = "";
      }

      // Vérification du message
      if (champMessage.value.trim().length < 10) {
        document.getElementById("erreurMessage").textContent = "Le message doit contenir au moins 10 caractères.";
        formulaireValide = false;
      } else {
        document.getElementById("erreurMessage").textContent = "";
      }

      // Résultat final
      if (formulaireValide) {
        feedback.style.color = "green";
        feedback.textContent = "Merci " + champNom.value + " ! Votre message a bien été envoyé.";
        formulaire.reset();
      } else {
        feedback.style.color = "red";
        feedback.textContent = "Veuillez corriger les champs indiqués en rouge.";
      }
    });
  }

});