console.log('Starting fetch...');
fetch('shared/footer.html')
    .then(response => {
        console.log('Response:', response); 
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status);
        }
        return response.text();
    })
    .then(data => {
        console.log('Data:', data); 
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));