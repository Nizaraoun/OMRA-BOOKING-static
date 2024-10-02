document.addEventListener("DOMContentLoaded", function() {
    const hotelContainer = document.getElementById('hotel-container').querySelector('.row');

    // Sample static data
    const hotelData = [
        {
            title: "Suite junior avec vue sur la ville",
            subtitle: "Chambre double vue ville",
            rating: 9.5,
            ratingText: "Excellent",
            reviews: 27,
            features: ["Vue sur la ville", "coin de prière", "tapis de prière"],
            cancellationPolicy: [
                { type: "Non remboursable", price: "+ 0 €" },
                { type: "Entièrement remboursable avant le 11 sept.", price: "+ 40 €" },
            ],
            extras: [
                { type: "Petit-déjeuner", price: "+ 0 €" },
                { type: "Demi-pension", price: "+ 55 €" },
            ],
            totalPrice: "652 €",
            perNightPrice: "253 € par nuit",
            imageUrl: "assets/images/omra/hotel1.jfif",
        },
        {
            title: "Chambre standard avec vue sur la mer",
            subtitle: "Chambre double avec balcon",
            rating: 8.7,
            ratingText: "Excellent",
            reviews: 15,
            features: ["Vue sur la mer", "terrasse privée", "climatisation"],
            cancellationPolicy: [
                { type: "Non remboursable", price: "+ 0 €" },
                { type: "Remboursable jusqu'à 5 jours avant", price: "+ 30 €" },
            ],
            extras: [
                { type: "Petit-déjeuner inclus", price: "+ 0 €" },
                { type: "Demi-pension", price: "+ 50 €" },
            ],
            totalPrice: "500 €",
            perNightPrice: "200 € par nuit",
            imageUrl: "assets/images/omra/hotel2.jfif",
        },
        {
            title: "Suite familiale avec vue sur la piscine",
            subtitle: "Chambre spacieuse pour familles",
            rating: 9.0,
            ratingText: "Excellent",
            reviews: 32,
            features: ["Vue sur la piscine", "deux chambres", "salle de bains privée"],
            cancellationPolicy: [
                { type: "Non remboursable", price: "+ 0 €" },
                { type: "Remboursable jusqu'à 3 jours avant", price: "+ 50 €" },
            ],
            extras: [
                { type: "Petit-déjeuner", price: "+ 10 €" },
                { type: "Demi-pension", price: "+ 60 €" },
            ],
            totalPrice: "750 €",
            perNightPrice: "300 € par nuit",
            imageUrl: "assets/images/omra/hotel3.jfif",
        },
    ];

    // Function to generate hotel cards from data
    hotelData.forEach(hotel => {
        const hotelCardHTML = `
            <div class="col-sm containerHotel">
                <img src="${hotel.imageUrl}" alt="">
                <div class="room-card">
                    <h2 class="room-title">${hotel.title}</h2>
                    <p class="room-subtitle">${hotel.subtitle}</p>
                    
                    <div class="rating col-12">
                        <span class="rating-score">${hotel.rating}</span>
                        <span class="rating-text">${hotel.ratingText}</span>
                        <span class="reviews">${hotel.reviews} avis</span>
                    </div>
                    
                    <div class="features">
                        <h3>Points forts :</h3>
                        <ul>
                            ${hotel.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="cancellation-policy">
                        <h3>Politique d’annulation</h3>
                        <p>Plus de détails sur toutes les options de la politique</p>
                        ${hotel.cancellationPolicy.map(option => `
                            <div class="policy-option">
                                <input type="radio" name="cancellation" id="${option.type.replace(/\s+/g, '-')}" />
                                <label for="${option.type.replace(/\s+/g, '-')}">${option.type}</label>
                                <span class="policy-price">${option.price}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="extras">
                        <h3>Extras</h3>
                        ${hotel.extras.map(extra => `
                            <div class="extra-option">
                                <input type="checkbox" id="${extra.type.replace(/\s+/g, '-')}">
                                <label for="${extra.type.replace(/\s+/g, '-')}">${extra.type}</label>
                                <span class="extra-price">${extra.price}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="price-and-book-section">
                        <div class="price-details">
                            <h6 class="total-price">${hotel.totalPrice}</h6>
                            <p>1 chambre <br>${hotel.perNightPrice}</p>
                            <a href="#" class="price-details-link">Détails sur le prix ></a>
                        </div>
                        <button class="book-button">Réserver</button>
                    </div>
                </div>
            </div>
        `;
        hotelContainer.insertAdjacentHTML('beforeend', hotelCardHTML);
    });
});
