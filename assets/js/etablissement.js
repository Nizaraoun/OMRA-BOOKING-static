const infoData = [
    {
        icon: "fa-sign-in-alt",
        title: "Arrivée",
        text: "À partir de 16:00"
    },
    {
        icon: "fa-sign-out-alt",
        title: "Départ",
        text: "Jusqu'à 12:00"
    },
    {
        icon: "fa-clock",
        title: "Horaires des repas",
        text: `
           Petit-déjeuner : 06:00 - 10:30
           Déjeuner : 12:00 - 15:00
           Dîner : 18:30 - 22:30
        `
    },
    {
        icon: "fa-info-circle",
        title: "Annulation / Prépaiement",
        text: `"Les conditions d'annulation et de prépaiement peuvent différer selon le type d'hébergement. Merci de vérifier les conditions spécifiques avant de réserver."`
    },
    {
        icon: "fa-bed",
        title: "Enfants et lits supplémentaires",
        text: `
           Les lits supplémentaires dépendent de la chambre choisie. Vérifiez la capacité de chaque chambre.
           Enfants jusqu'à [âge] ans : Séjour gratuit avec literie existante.
           Enfants de [âge] à [âge] ans : Séjour gratuit avec literie existante, frais supplémentaires pour lit supplémentaire.
           À partir de 10 ans : Frais supplémentaires pour lit d'appoint.
           Lit d'appoint et lit bébé disponibles sur demande (préciser les prix).
        `
    },
    {
        icon: "fa-moon",
        title: "Heures silencieuses",
        text: "Veuillez éviter de faire du bruit entre [heure] et [heure]."
    },
    {
        icon: "fa-credit-card",
        title: "Paiement par Omrabooking",
        text: "Omra Booking gère le paiement de votre séjour. Assurez-vous d'avoir des espèces pour couvrir tout supplément éventuel."
    }
];

const infoContainer = document.getElementById('infoContainer');

infoData.forEach(item => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row info-row border-bottom py-3';

    rowDiv.innerHTML = `
        <div class="col-1 d-flex align-items-center">
            <i class="fas ${item.icon} icon"></i>
        </div>
        <div class="col-4 d-flex align-items-center">
            <strong class="icon-title-space">${item.title}</strong>
        </div>
        <div class="col-7 title-text-space">
            ${item.text}
        </div>
    `;

    infoContainer.appendChild(rowDiv);
});