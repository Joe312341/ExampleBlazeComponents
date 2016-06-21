import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class BooksCollection extends Mongo.Collection {
  // define custom CRUD
}

export const Books = new BooksCollection('Books');

Books.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Books.schema = new SimpleSchema({
  title: { type: String },
  authorId: { type: String },
});

Books.attachSchema(Books.schema);
