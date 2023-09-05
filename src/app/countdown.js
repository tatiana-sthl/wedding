window.onload = function() {
    // Votre code JavaScript ici, il sera exécuté après le chargement complet de la page
  
    // Définissez votre fonction updateCountdown ici
    function updateCountdown() {
      const targetDate = new Date(2024, 8, 7, 0, 0, 0); // Date cible (année, mois (0-11), jour, heures, minutes, secondes)
      const currentDate = new Date();
      const timeLeft = targetDate - currentDate;
  
      if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "Décompte terminé!";
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
        document.getElementById("countdown").innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
      }
    }
  
    // Mettre à jour le décompte toutes les secondes
    setInterval(updateCountdown, 1000);
  
    // Appeler la fonction initiale pour éviter un délai d'une seconde avant le premier affichage
    updateCountdown();
  };
  