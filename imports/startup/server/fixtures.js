import { Meteor } from 'meteor/meteor';
import { Authors } from '/imports/api/authors/authors.js';
import { Books } from '/imports/api/books/books.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (Authors.find().count() === 0) {
    const data = [
      {
        name: 'J. K. Rowling',
        birthDate: new Date(1965, 6, 31),
        books: [
          'Harry Potter 1',
          'Harry Potter 2',
          'Harry Potter 3',
        ],
      },
      {
        name: 'Stephen King',
        birthDate: new Date(1947, 8, 21),
        books: [
          'The Shining',
          'The Stand',
          'Carrie',
          'It',
          'Misery',
        ],
      },
      {
        name: 'James Patterson',
        birthDate: new Date(1947, 2, 22),
        books: [
          'Private',
          'NYPD Red',
          'I Funny',
        ],
      },
      {
        name: 'George R. R. Martin',
        birthDate: new Date(1948, 8, 20),
        books: [
          'GoT 1',
          'GoT 2',
          'GoT 3',
        ],
      },
      {
        name: 'Nora Roberts',
        birthDate: new Date(1950, 9, 10),
        books: [
          'Dark Witch',
          'Shadow Spell',
          'The Witness',
        ],
      },
    ];

    let timestamp = (new Date()).getTime();

    data.forEach((author) => {
      const authorId = Authors.insert({
        name: author.name,
        birthDate: author.birthDate,
        createdAt: new Date(timestamp),
      });
      timestamp += 1; // ensure unique timestamp
      author.books.forEach((book) => {
        Books.insert({
          book,
          authorId,
          createdAt: new Date(timestamp),
        });
      });
      timestamp += 1; // ensure unique timestamp
    });
  }
});
