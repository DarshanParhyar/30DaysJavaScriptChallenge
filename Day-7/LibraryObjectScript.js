const library = {
    name: "Central Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "Moby Dick", author: "Herman Melville", year: 1851 }
    ]
};

console.log(library);
console.log(`Library Name: ${library.name}`);
library.books.forEach(book => {
    console.log(`Book Title: ${book.title}`);
});
