const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getSummary: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getDetails: function() {
        return `${this.title} was published in ${this.year}`;
    }
};

console.log(book);
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(book.getSummary());
book.updateYear(2021);
console.log(book);
console.log(book.getDetails());

for (let prop in book) {
    console.log(`${prop}: ${book[prop]}`);
}

console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));
