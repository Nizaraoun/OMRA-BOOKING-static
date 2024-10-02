// Load the navbar.html content into the placeholder
console.log('Starting fetch...');
fetch('shared/navbar.html')
    .then(response => {
        console.log('Response:', response); 
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status);
        }
        return response.text();
    })
    .then(data => {
        console.log('Data:', data); 
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));

// Load the footer.html content into the placeholder (optional)
// fetch('html.goMakkahcom/GoMakkah/shared/footer.html')
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById('footer-placeholder').innerHTML = data;
//   });
