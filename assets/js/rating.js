const ratingsData = [
    { title: "Personnel", rating: 8.5, progress: 85 },
    { title: "Équipements", rating: 8.7, progress: 87 },
    { title: "Propreté", rating: 8.9, progress: 89 },
    { title: "Confort", rating: 8.6, progress: 86 },
    { title: "Rapport qualité-prix", rating: 8.2, progress: 82 },
    { title: "Situation géographique", rating: 8.4, progress: 84 },
   
];

function generateRatingsHTML() {
    const container = document.getElementById("ratings-container");
    const rowDiv = document.createElement("div");
    rowDiv.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3";

    ratingsData.forEach(data => {
        const colDiv = document.createElement("div");
        colDiv.className = "col mb-3";

        colDiv.innerHTML = `
            <div class="row progress-container">
                <div class="col-12 d-flex justify-content-between">
                    <div class="progress-title">${data.title}</div>
                    <div class="rating">${data.rating}</div>
                </div>
                <div class="col-12">
                    <div class="progress">
                        <div class="progress-bar progress-bar-warning" role="progressbar" 
                             style="width: ${data.progress}%" 
                             aria-valuenow="${data.progress}" 
                             aria-valuemin="0" 
                             aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        `;
        rowDiv.appendChild(colDiv);
    });

    container.appendChild(rowDiv);
}

window.onload = generateRatingsHTML;

    // mba3ed nzidou kan value rating mabin 0 et 30 coleurs rouge .......