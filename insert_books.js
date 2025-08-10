// insert_books.js
const { MongoClient } = require('mongodb');

async function run() {
  const uri = 'your_mongodb_connection_string';  // Replace this with your MongoDB URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('plp_bookstore');
    const books = db.collection('books');

    // Optional: Clear the collection first to avoid duplicate inserts during development
    await books.deleteMany({});

    const bookData = [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        published_year: 1925,
        price: 10.99,
        in_stock: true,
        pages: 180,
        publisher: "Scribner"
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        published_year: 1960,
        price: 12.99,
        in_stock: true,
        pages: 281,
        publisher: "J.B. Lippincott & Co."
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Programming",
        published_year: 2008,
        price: 32.99,
        in_stock: true,
        pages: 464,
        publisher: "Prentice Hall"
      },
      {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        genre: "Programming",
        published_year: 1999,
        price: 25.99,
        in_stock: false,
        pages: 352,
        publisher: "Addison-Wesley"
      },
      {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        published_year: 1949,
        price: 9.99,
        in_stock: true,
        pages: 328,
        publisher: "Secker & Warburg"
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        published_year: 1951,
        price: 8.99,
        in_stock: false,
        pages: 214,
        publisher: "Little, Brown and Company"
      },
      {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        genre: "Programming",
        published_year: 2018,
        price: 20.00,
        in_stock: true,
        pages: 472,
        publisher: "No Starch Press"
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        published_year: 1937,
        price: 15.99,
        in_stock: true,
        pages: 310,
        publisher: "George Allen & Unwin"
      },
      {
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        genre: "Fantasy",
        published_year: 1996,
        price: 22.99,
        in_stock: false,
        pages: 694,
        publisher: "Bantam Spectra"
      },
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        genre: "Psychology",
        published_year: 2011,
        price: 14.99,
        in_stock: true,
        pages: 499,
        publisher: "Farrar, Straus and Giroux"
      }
    ];

    const result = await books.insertMany(bookData);
    console.log(`${result.insertedCount} books inserted.`);

  } catch (error) {
    console.error('Error inserting books:', error);
  } finally {
    await client.close();
  }
}

run();
