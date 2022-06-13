let name = "pepe",
age = 25,
price = "$99.90",
favSeries = ["Dark", "Mr Robot", "Castlevania"],
favMovies = [
    {
        name: "Back to the future",
        release: 1985,
        protagonists: ["Michael Fox", "Christopher Lloyd"]
    },
    {
        name: "Scream",
        release: 1996,
        protagonists: ["Neve Campbell", "Courteney Cox"]
    }
];

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Price: ${price}`);
console.log(`Favorite series: ${favSeries}`);
favMovies.forEach(movie => {
    console.log(`Movie name: ${movie.name}`);
    console.log(`Release: ${movie.release}`);
    console.log(`Protagonists: ${movie.protagonists}`);
});

age++;
console.log(`Age: ${age}`);

favSeries.push("Breaking Bad");
console.log(`Favorite series: ${favSeries}`);