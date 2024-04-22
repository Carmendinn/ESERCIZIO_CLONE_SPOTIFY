fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
.then(response => {
    return response.json();
})
.then(data => {
    const canzoniEminem = data.data;
    const container = document.getElementById("eminemSection");

    canzoniEminem.forEach(canzone => {
        const card = document.createElement("div");
        card.classList.add("card-box");

        // Inserisco i dati nella card
        card.innerHTML = `<div class="d-flex flex-column justify-content-center align-items-center my-4 mx-3s">
                            <img src="${canzone.album.cover}" alt="${canzone.title}" class="rounded-img">
                            <h3 class"text">${canzone.title}</h3">
                            <p class"text">${canzone.artist.name}</p>
                            <p class"text">${canzone.album.title}</p>
                          </div>`;
        
        container.appendChild(card); 
    });
})
.catch(error => {
    console.error("Richiesta non valida:", error);
});
//titoli album con pulsante modale
document.addEventListener("DOMContentLoaded", function() {
    // Aggiungi un gestore di eventi al pulsante "Crea lista"
    document.getElementById("createListBtn").addEventListener("click", function() {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        .then(response => response.json())
        .then(data => {
            const canzoniEminem = data.data;
            const albumTitles = canzoniEminem.map(canzone => canzone.album.title);

            // Mostra i titoli degli album nel modale
            const modalBody = document.getElementById("albumListBody");
            modalBody.innerHTML = ""; // Pulisco il contenuto del modale
            albumTitles.forEach(title => {
                const albumTitleElement = document.createElement("p");
                albumTitleElement.textContent = title;
                modalBody.appendChild(albumTitleElement);
            });

            // Mostra il modale
            $('#albumListModal').modal('show');
        })
        .catch(error => {
            console.error("Richiesta non valida:", error);
        });
    });
});
//metallica
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
.then(response => {
    return response.json();
})
.then(data => {
    const canzoniMetallica = data.data;
    const container = document.getElementById("metallicaSection");

    canzoniMetallica.forEach(canzone => {
        const card = document.createElement("div");
        card.classList.add("card-box");

        // Inserisco i dati nella card
        card.innerHTML = `<div class="d-flex flex-column justify-content-center align-items-center my-4 mx-3s">
                            <img src="${canzone.album.cover}" alt="${canzone.title}" class="rounded-img">
                            <h3 class"text">${canzone.title}</h3">
                            <p class"text">${canzone.artist.name}</p>
                            <p class"text">${canzone.album.title}</p>
                          </div>`;
        
        container.appendChild(card); 
    });
})
.catch(error => {
    console.error("Richiesta non valida:", error);
});
//titoli album con pulsante modale
document.addEventListener("DOMContentLoaded", function() {
    // Aggiungi un gestore di eventi al pulsante "Crea lista"
    document.getElementById("list").addEventListener("click", function() {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
        .then(response => response.json())
        .then(data => {
            const canzoniMetallica = data.data;
            const albumTitles = canzoniMetallica.map(canzone => canzone.album.title);

            // Mostra i titoli degli album nel modale
            const modalBody = document.getElementById("albumListBody");
            modalBody.innerHTML = ""; // Pulisco il contenuto del modale
            albumTitles.forEach(title => {
                const albumTitleElement = document.createElement("p");
                albumTitleElement.textContent = title;
                modalBody.appendChild(albumTitleElement);
            });

            // Mostra il modale
            $('#albumModal').modal('show');
        })
        .catch(error => {
            console.error("Richiesta non valida:", error);
        });
    });
});

//queen
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
.then(response => {
    return response.json();
})
.then(data => {
    const canzoniQueen = data.data;
    const container = document.getElementById("queenSection");

    canzoniQueen.forEach(canzone => {
        const card = document.createElement("div");
        card.classList.add("card-box");

        // Inserisco i dati nella card
        card.innerHTML = `<div class="d-flex flex-column align-items-center justify-content-center my-5">
                            <img src="${canzone.album.cover}" alt="${canzone.title}" class="rounded-img mx-2">
                            <h3>${canzone.title}</h3>
                            <p>${canzone.artist.name}</p>
                            <p>${canzone.album.title}</p>
                          </div>`;
        
        container.appendChild(card); 
    });
})
.catch(error => {
    console.error("Richiesta non valida:", error);
});



