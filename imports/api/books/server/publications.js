/* eslint-disable prefer-arrow-callback */
import { Books } from '../books.js';
import { check } from 'meteor/check';

Meteor.publish('booksForAuthor', function booksForAuthor(bookId) {
  check(bookId, String);
  return Books.find({ authorId: bookId });
});
