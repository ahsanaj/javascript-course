// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
// Maybe the join method will be helpful here

var favoriteMovie = {
    title: '3 Idiots',
    duration: 170,
    stars: ["Aamir Khan", "Madhavan", "Mona Singh", "Sharman Joshi"]
}

var strStars = favoriteMovie.stars;

var strStarsLength = strStars.length;

var printStars = strStars.slice(0, strStarsLength - 1).join(', ') + " and " + strStars.slice(-1);

console.log(favoriteMovie.title + " lasts for " + favoriteMovie.duration + " mins. Stars: " + printStars);