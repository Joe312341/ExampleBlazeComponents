import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class AuthorsCollection extends Mongo.Collection {
  // define custom CRUD
}

export const Authors = new AuthorsCollection('Authors');

Authors.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Authors.schema = new SimpleSchema({
  name: { type: String },
  birthDate: { type: Date },
});

Authors.attachSchema(Authors.schema);
