const bookIteration = {
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

for (let prop in bookIteration) {
    console.log(`${prop}: ${bookIteration[prop]}`);
}

console.log("Keys:", Object.keys(bookIteration));
console.log("Values:", Object.values(bookIteration));
