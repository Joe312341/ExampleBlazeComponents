import './author-list-item.html';

Template.authorListItemTmpl.onCreated( function authorListItemOnCreated(){

})

Template.authorListItemTmpl.onRendered( function authorListItemOnRendered(){

})

Template.authorListItemTmpl.helpers({

})

Template.authorListItemTmpl.events({
  "click .list-group-item"(event, instance){
    event.preventDefault();
    instance.parent(2).authorId.set(this.collectionItem._id)
  }
})
