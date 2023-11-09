/*
    Make a heading in your HTML that says "My Top Three Favorite Movies" ✓
    Make an array of three objects that represent your top 3 favorite movies ✓
    Each object will be a movie should have a name key, a year key, a director key, and a picture key that has a URL of a poster (find pics on google) ✓
    Map over the array and build an array of <li> elements for each object (take a look at the last module video) ✓
    Grab the <ol> on the page with JavaScript and insert your array onto the page to display the information your top 3 favorite movies. ✓
*/

const favMovies = [
    {
        name: "The Menu",
        year: 2022,
        director: "Mark Mylod",
        picture: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Menu_%282022_film%29.jpg"
    },
    {
        name: "Spider-Man: Across the Spiderverse",
        year: 2023,
        director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
        picture: "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg"
    },
    {
        name: "Ghost in the Shell",
        year: 1995,
        director: "Mamoru Oshii",
        picture: "https://www.themoviedb.org/t/p/w440_and_h660_face/9gC88zYUBARRSThcG93MvW14sqx.jpg"
    }
];

//Map over array, use template to build <li> elements of each object
const list = favMovies.map(movie => `
    <li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director(s): ${movie.director}</p>
    <img src = "${movie.picture}">
    </li>
`);

//grab ol
const ol = document.querySelector("ol");

//Insert array into <ol>
ol.innerHTML = list.join('');