async function fetchMovie(movieTitle) {
    const apiKey = '35eefa14';
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=35eefa14`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch movie data');
        }
        const data = await response.json();

        // Display movie data in HTML
        const movieDetails = document.getElementById("movieDetails");
        movieDetails.innerHTML = `
            <h2>${data.Title}</h2>
            <p>Year: ${data.Year}</p>
            <p>Genre: ${data.Genre}</p>
            <p>Plot: ${data.Plot}</p>
            <img src="${data.Poster}" alt="${data.Title} Poster">
        `;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function with a test movie title
fetchMovie("Inception");
fetchMovie("titanic");