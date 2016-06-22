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
  this.authorState = new ReactiveVar();
  this.authorStateObject = {
    title: 'Authors',
    templateName: 'authorListItemTmpl',
    collectionName: Authors,
    placeHolderMessage: 'No Authors Available',
    subscriptionName: 'allAuthors',
  };
  this.authorState.set(this.authorStateObject);
  this.bookState = new ReactiveVar();
  this.bookStateObject = {
    title: 'Books',
    templateName: 'booksListItemTmpl',
    collectionName: Books,
    placeHolderMessage: 'No Books Available',
    subscriptionName: 'booksForAuthor',
  };
  this.bookState.set(this.bookStateObject);
});

Template.homePageTmpl.helpers({
  // helper gets called when authorId , a reactive variable, is changed
  adjustBookState() {
    const instance = Template.instance();
    instance.bookStateObject.findRestriction = { authorId: instance.authorId.get() };
    instance.bookStateObject.subscriptionArguments = instance.authorId.get();
    instance.bookState.set(instance.bookStateObject);
    return;
  },
});
