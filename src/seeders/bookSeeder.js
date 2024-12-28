const db = require('../models');
const Book = db.books;

const sampleBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Fiction",
    publishedYear: 1925
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: 1949
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Literary Fiction",
    publishedYear: 1960
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1937
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery Thriller",
    publishedYear: 2003
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Young Adult",
    publishedYear: 2008
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    publishedYear: 1965
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    publishedYear: 1977
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Contemporary Fiction",
    publishedYear: 1988
  }
];

const seedBooks = async () => {
  try {
    const existingBooks = await Book.count();
    
    if (existingBooks === 0) {
      await Book.bulkCreate(sampleBooks);
      console.log('Sample books seeded successfully');
    } else {
      console.log('Books already exist in the database');
    }
  } catch (error) {
    console.error('Error seeding books:', error);
  }
};

module.exports = seedBooks;