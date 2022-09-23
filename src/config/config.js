export let urlSearchById = (value) => {
    return `http://www.omdbapi.com/?i=${value}&apikey=6ffb7317`;
}

export let urlSearchByName = (value) => {
    return `http://www.omdbapi.com/?s=${value}&apikey=6ffb7317`;
}

export let urlSearchByYear = (value) => {
    return `http://www.omdbapi.com/?y=${value}&apikey=6ffb7317`;
}