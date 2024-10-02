const amenities = [
    {
        title: "Salle de bains",
        icon: "fas fa-bath",
        items: ["Sèche-cheveux", "Douche"]
    },
    {
        title: "Réception",
        icon: "fas fa-concierge-bell",
        items: ["Service de concierge", "Bagagerie", "Réception ouverte 24h/24"]
    },
    {
        title: "Sécurité",
        icon: "fas fa-shield-alt",
        items: ["Extincteurs", "Détecteurs de fumée", "Alarme de sécurité", "Sécurité 24h/24", "Coffre-fort"]
    },
    {
        title: "Services d'affaires",
        icon: "fas fa-briefcase",
        items: ["Fax/photocopies (En supplément)", "Centre d'affaires (En supplément)", "Salles de réunion/réception (En supplément)"]
    },
    {
        title: "Langues parlées",
        icon: "fas fa-language",
        items: ["Arabe", "Anglais", "Hindi"]
    },
    {
        title: "Services de nettoyage",
        icon: "fas fa-broom",
        items: ["Service de ménage quotidien", "Presse à pantalons (En supplément)", "Service de repassage (En supplément)", "Blanchisserie/laverie (En supplément)"]
    },
    {
        title: "Général",
        icon: "fas fa-cogs",
        items: ["Climatisation", "Chauffage", "Ascenseur", "Chambres familiales", "Salon de coiffure/institut de beauté", "Service d'étage"]
    },
    {
        title: "Accessibilité",
        icon: "fas fa-wheelchair",
        items: ["Aides visuelles : braille", "Lavabo bas adapté aux personnes à mobilité réduite", "Toilettes avec barres d'appui", "Accessible en fauteuil roulant"]
    }
];

function renderAmenities() {
    const container = document.getElementById('amenities-container');
    let html = '';

    amenities.forEach((amenity, index) => {
        if (index % 3 === 0 && index !== 0) {
            html += `</div><div class="row text-center">`; 
        }
        html += `
            <div class="col-md-4">
                <h5 class="amenity-title"><i class="${amenity.icon}"></i> ${amenity.title}</h5>
                <ul class="amenity-list">
                    ${amenity.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    container.innerHTML = html;
}

renderAmenities();