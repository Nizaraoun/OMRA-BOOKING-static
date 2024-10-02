const cardsData = [
  { icon: 'fa-kaaba', label: 'Vue directe sur la Kaaba' },
  { icon: 'fa-walking', label: 'Accessible à pied au Haram' },
  { icon: 'fa-pray', label: 'Salle de prière disponible' },
  { icon: 'fa-mosque', label: 'Mosquée à moins de 200 m' },
  { icon: 'fa-map-marker-alt', label: 'À 7 km de Mina (Jamarat)' },
  { icon: 'fa-hotel', label: 'Hôtel dans Abraj Al Bait' },
  { icon: 'fa-link', label: 'Chambre connecté au haram' },
  { icon: 'fa-spa', label: 'Spa et massage' },
  { icon: 'fa-cut', label: 'Coiffeur à moins de 200 m' },
  { icon: 'fa-wheelchair', label: 'Chambre aux handicapées' }
];

const cardContainer = document.getElementById('card-container');

cardsData.forEach((card, index) => {
  console.log('Creating card', index);

  // Create card HTML using template literals
  const cardHTML = `
      <div class="col mb-3">
          <div class="card text-center p-0 shadow-sm custom-card">
              <div class="card-body p-2">
                  <i class="fas ${card.icon} fa-1x mb-2"></i>
                  <h6 class="card-title">${card.label}</h6>
              </div>
          </div>
      </div> 
  `;

  // Append the card HTML to the container
  cardContainer.innerHTML += cardHTML;
});


// ***************************************************************


//  hedha boucle pour les descreption
const descriptions = [
    {
        title: "Vue Kaaba disponible",
        text: "Oui, certaines chambres offrent une vue imprenable sur la Kaaba",
        available: true
    },
    {
        title: "Hôtel accessible à pied",
        text: "Oui, l'accès au Haram peut se faire à pied en seulement quelques minutes",
        available: true
    },
    {
        title: "Portes les plus proches du Haram",
        text: "Portes King Abdulaziz et Ajyad",
        available: true
    },
    {
        title: "Mosquées à proximité",
        text: "Oui, plusieurs mosquées se trouvent à proximité immédiate",
        available: true
    },
    {
        title: "Hôtel dans les tours Alsafwa ?",
        text: "Non, il est situé dans les tours Abraj Al Bait",
        available: false
    },
    {
        title: "Hôtel sur Jabal Omar ?",
        text: "Non, mais il est à proximité",
        available: false
    }
];

const cardDescreption = document.getElementById('card-descreption');

descriptions.forEach(desc => {
    // Create card HTML
    const cardHTML = `
        <h5>${desc.title}</h5>
        <p><i class="fas fa-${desc.available ? 'check' : 'times'}" style="color: ${desc.available ? '#55BA47' : '#D50000'}"></i>
            ${desc.text}
        </p>
    `;

    // Append the card HTML to the container
    cardDescreption.innerHTML += cardHTML;
    cardDescreption.innerHTML += '<hr class="solid">';
});



//  hedha boucle pour les descreption table 2
const descriptionTable = document.getElementById("description-table");

// Static data from the table capture
const tableData = [
    {
        label: "Chambres connectées disponibles",
        value: "Oui, disponibles sur demande",
        available: true
    },
    {
        label: "Suites 5 personnes disponibles",
        value: "Oui, certaines suites peuvent accueillir jusqu'à 5 personnes",
        available: true

    },
    {
        label: "Chambres quadruples avec 4 lits séparés",
        value: "Oui, disponibles",
        available: true

    },
    {
        label: "Chambres avec 5 lits disponibles",
        value: "Oui, sur demande",
        available: true

    },
    {
        label: "Coin cuisine dans la chambre ?",
        value: "Non, mais un minibar et un service de thé/café sont disponibles",
        available: false

    },
    {
        label: "Bouilloires d'eau dans les chambres",
        value: "Oui, disponible",
        available: true

    },
    {
        label: "Prises américaines ou prises françaises ?",
        value: "Prises internationales avec adaptateurs sur demande",
        available: true
    }
];

// Iterate over each data item and create table rows
tableData.forEach(data => {
    const rowHTML = `
        <tr>
            <td>
                <p style="color: black">${data.label}</p>
            </td>
            <td>
<p><i class="fas fa-${data.available ? 'check' : 'times'}" style="color: ${data.available ? '#55BA47' : '#D50000'}"></i>
            ${data.value}
        </p>            </td>
        </tr>
    `;

    // Append the row HTML to the table container
    descriptionTable.innerHTML += rowHTML;
});




// function toggleCalendar(calendarId) {
//     const calendar = document.getElementById(calendarId);
//     const allCalendars = document.querySelectorAll('.calendar-popup');
//     allCalendars.forEach(cal => {
//       if (cal.id !== calendarId) {
//         cal.style.display = 'none';
//       }
//     });
  
//     if (calendar.style.display === 'block') {
//       calendar.style.display = 'none';
//     } else {
//       calendar.style.display = 'block';
//     }
//   }
  
//   window.addEventListener('click', function(e) {
//     const allCalendars = document.querySelectorAll('.calendar-popup');
//     if (!e.target.matches('.date-input')) {
//       allCalendars.forEach(cal => {
//         cal.style.display = 'none';
//       });
//     }
//   });
  

// hedhy  to change the scrollbar 

document.getElementById('changeScrollbar').addEventListener('click', function() {
    document.querySelector('body').style.setProperty('--scrollbar-thumb', '#000');
});
