// The Reading List
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var readingList = [{
        title: 'Dota 2',
        author: 'Ahsan Jawed',
        alreadyRead: true
    },
    {
        title: 'Game of Thrones',
        author: 'George R. R. Martin',
        alreadyRead: false
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        alreadyRead: false
    },
    {
        title: 'Shining',
        author: 'Stephen King',
        alreadyRead: true
    }
]

var readingListLength = readingList.length;

for (var index = 0; index < readingListLength; index += 1) {
    var title = readingList[index].title;
    var author = readingList[index].author;
    var isRead = readingList[index].alreadyRead;

    if (isRead) {
        console.log("You alread read \"" + title + "\" by " + author);
    } else {
        console.log("You still need to read \"" + title + "\" by " + author);
    }
}