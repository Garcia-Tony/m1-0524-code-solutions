'use strict';
const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryId: 3353,
};
const { title, author, libraryId } = book1;
console.log(
  `The title of the book is ${title}, the author is ${author}, and the library id is ${libraryId}`
);
const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryId: 2345,
};
const { title: reference, author: writer, libraryId: number } = book2;
console.log(
  `The title of the book is ${reference}, the author is ${writer}, and the library id is ${number}`
);
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];
const [book3, book4, book5] = library;
console.log('Book3:', book3);
console.log('Book4:', book4);
console.log('Book5:', book5);
const [, , , book6] = library;
console.log('Book6:', book6);
