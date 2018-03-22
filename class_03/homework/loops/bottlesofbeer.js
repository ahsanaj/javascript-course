// 99 Bottles of Beer
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

for (var count = 99; count >= 1; count -= 1) {
    if (count === 1) {
        console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");

    } else if (count - 1 === 1) {
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, " + (count - 1) + " bottle of beer on the wall.");
    } else {
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, " + (count - 1) + " bottles of beer on the wall.");
    }
}
console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");