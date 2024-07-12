'use strict';
const books = [
  {
    isbn: '9783453435773',
    title: 'It',
    author: 'Stephen King',
  },
  {
    isbn: '9780333791035',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    isbn: '9780060888695',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
];
console.log('Array of books:', books);
console.log('Type of books:', typeof books);
const booksJSON = JSON.stringify(books);
console.log('JSON String of Books:', booksJSON);
console.log('Type of booksJSON:', typeof booksJSON);
const studentJSON = '{"numberId": 666, "stringName": "Tony Garcia"}';
console.log('JSON String of Student:', studentJSON);
console.log('Type of studentJSON:', typeof studentJSON);
const studentObject = JSON.parse(studentJSON);
console.log('Parse student object:', studentObject);
console.log('Type of studentObject:', typeof studentObject);
