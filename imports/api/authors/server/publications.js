/* eslint-disable prefer-arrow-callback */

import { Authors } from '../authors.js';

Meteor.publish('allAuthors', function allAuthors() {
  return Authors.find();
});
