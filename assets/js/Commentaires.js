// Sample static data
const comments = [
  {
      name: "Halima",
      country: "🇫🇷",
      text: "« Tout était parfait. L’emplacement de notre chambre nous apercevons la Kaaba. Le p'tit dej le diner en demi pension, pensez à varier et à changer vos buffet du soir »",
  },
  {
      name: "Ahmed",
      country: "🇫🇷",
      text: "« L’emplacement était parfait, à environ 5 minutes à pieds du Haram, la nourriture était excellente et très variée, un grand bravo à leurs pâtisseries qui étaient très raffinées. »",
  },
  {
      name: "Badr",
      country: "🇲🇦",
      text: "« Excellent hôtel. Excellent personnel, literie et position parfaite »",
  },
  {
      name: "Samira",
      country: "🇲🇦",
      text: "« Un séjour inoubliable. Le personnel était très accueillant et serviable. »",
  },
  {
      name: "Youssef",
      country: "🇫🇷",
      text: "« Très bon rapport qualité/prix. Je reviendrai certainement. »",
  },
  {
      name: "Nadia",
      country: "🇲🇦",
      text: "« La vue depuis ma chambre était à couper le souffle ! »",
  },
];

// Function to generate carousel items
function generateComments() {
  const commentsContainer = document.getElementById('comments-container');
  const totalComments = comments.length;
  
  for (let i = 0; i < totalComments; i += 3) {
      const isActive = i === 0 ? 'active' : ''; // Set the first item as active
      const commentGroup = comments.slice(i, i + 3); // Get the next group of 3 comments
      
      const commentItems = commentGroup.map(comment => `
          <div class="col cadreComentaire">
              <strong>${comment.name} ${comment.country}</strong><br>
              <p>${comment.text}</p>
              <a href="#">En savoir plus</a>
          </div>
      `).join('');

      const commentHTML = `
          <div class="carousel-item ${isActive}">
              <div class="row row-cols-4">
                  ${commentItems}
              </div>
          </div>
      `;

      commentsContainer.innerHTML += commentHTML; // Append the comment group to the container
  }
}

// Call the function to generate comments
generateComments();
