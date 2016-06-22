import './author-list-item.html';

import { Template } from 'meteor/templating';

Template.authorListItemTmpl.events({
  // changes authorId defined in the top level components (the page)
  'click .list-group-item'(event, instance) {
    event.preventDefault();
    instance.parent(2).authorId.set(this.collectionItem._id);
  },
});
