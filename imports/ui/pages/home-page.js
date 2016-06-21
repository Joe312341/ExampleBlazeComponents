import './home-page.html';

// import components used
import '/imports/ui/components/list-table.js';

// import list items used -- here we create two instances of the list-table components
// with two different list items
// the highest level component (ie the page) needs to import all necessary template and collections
import '/imports/ui/components/author-list-item.js';
import '/imports/ui/components/books-list-item.js';

import { Authors } from '/imports/api/authors/authors.js';
import { Books } from '/imports/api/books/books.js';
import { Template } from 'meteor/templating';

Template.homePageTmpl.onCreated(function homePageOnCreated() {
  // authorId is reactively changed when we select an author
  // it then gets sent to the booklist as input
  this.authorId = new ReactiveVar();

  // state is the object which is handed down to the blaze components
  // create a state for every high level component which you instantiate
  this.authorState = {
    templateName: 'authorListItemTmpl',
    collectionName: Authors,
    placeHolderMessage: 'No Authors Available',
  };
  this.bookState = {
    templateName: 'booksListItemTmpl',
    collectionName: Books,
    placeHolderMessage: 'No Books Available',
  };
});

Template.homePageTmpl.helpers({
  getAuthorId() {
    const instance = Template.instance();
    // console.log(instance.authorId.get());
    instance.bookState.findRestriction = { authorId: instance.authorId.get() };
    return instance.authorId.get();
  },
});
