

  // Array of question data
  const questionGroups = [
    [
      "Salle de prière disponible à l'hôtel ?",
      "Chambres connectées à la mosquée Haram ?",
      "Hôtel dans direction de la Qibla ?",
      "Appel des prières diffusé dans la chambre ?",
      "Chambres avec accès direct au Haram ?"
    ],
    [
      "Nombre de restaurants à l'hôtel",
      "Horaires du restaurant",
      "Room service disponible à l'hôtel ?",
      "Restaurants avec vues sur le Haram ?",
      "Hôtel dans les tours Alsafwa ?"
    ]
  ];

  // Function to render the questions
  function renderQuestions() {
    const questionsContainer = document.getElementById('questions-container');

    // Loop through each group of questions
    questionGroups.forEach((group) => {
      const table = document.createElement('table');
      table.classList.add('question-card');

      // Loop through each question in the group
      group.forEach((question) => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = question;
        row.appendChild(cell);
        table.appendChild(row);
      });

      // Append the table to the container
      questionsContainer.appendChild(table);
    });

    // Add the search card
    const searchCard = document.createElement('div');
    searchCard.classList.add('question-card', 'search-card');
    searchCard.innerHTML = `
      <h3>Vous cherchez encore ?</h3>
      <button>Poser une question</button>
      <p>Nous apportons une réponse immédiate à la plupart des questions.</p>
    `;
    questionsContainer.appendChild(searchCard);
  }

  // Render questions on page load
  document.addEventListener('DOMContentLoaded', renderQuestions);




                                            //:::::::::::::::::::::::::::::::::
                                            //                                 ::
                                            //                  0               ::
                                            //                  |                ::            :::::::::::::::::::                
                                            //                 /*\                ::             ::::       
                                            //                / * \                ::              :::
                                            //                 _*_                 :::::::::::::::::::
                                            //                /   \                ::                             
                                            //               /     \               ::               
                                            //                                    ::
                                            //             </>Nizar</>           ::
                                            //                Aoun              ::
                                            //::::::::::::::::::::::::::::::::::



                                            


const cardQuestion = document.getElementById('cardQuestion');

// Define the static data as an array of objects
const questions = [
  {
    question: "Quels sont les horaires des prières et des appels à la prière dans l'hôtel ?",
    answer: "(L'hôtel diffuse les appels à la prière dans les chambres via des haut-parleurs. Les horaires des prières sont également disponibles à la réception et dans les espaces communs)"
  },
  {
    question: "L'hôtel propose-t-il une salle de prière pour les femmes ?",
    answer: "Oui, l'hôtel dispose d’une salle de prière pour les femmes, située à [distance] du lobby principal"
  },
  {
    question: "Y a-t-il des services spéciaux pour les pèlerins pendant le mois de Ramadan ?",
    answer: "Oui, l'hôtel propose des repas Iftar et Suhoor pendant le mois de Ramadan. Veuillez vous renseigner à l'avance sur les horaires et les options disponibles"
  },
  {
    question: "Comment l'hôtel gère-t-il les besoins spécifiques des pèlerins, tels que les espaces de prière et les horaires de prière ?",
    answer: "L’hôtel met à disposition des tapis de prière, des coins de prière dans chaque chambre, et un espace de prière dédié aux pèlerins. Les horaires des prières sont affichés dans tout l'hôtel"
  },
  {
    question: "L'hôtel propose-t-il des services de transport ou des informations pour se rendre aux lieux saints ?",
    answer: "Oui, des services de transport et des informations pour se rendre aux lieux saints sont disponibles à la réception"
  }
];

// Iterate through the static data to create the card HTML
questions.forEach((item, index) => {
  // Create card HTML
  const cardHTML = `
    <h5>${item.question}</h5>
    <p>${item.answer}</p>
  `;

  // Append the card HTML to the container
  cardQuestion.innerHTML += cardHTML;

  // Add a divider if it's not the last item
  if (index < questions.length - 1) {
    cardQuestion.innerHTML += '<hr class="solid">';
  }
});
