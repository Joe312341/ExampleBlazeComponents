import './list-table.html';

Template.listTableTmpl.onCreated( function listTableOnCreated(){
  this.state = this.data.state;
  //this.reactiveId = this.data.reactiveId;
})

Template.listTableTmpl.onRendered( function listTableOnCreated(){

})

Template.listTableTmpl.events({

})

Template.listTableTmpl.helpers({
  template(){
    const instance = Template.instance()
    const templateName = instance.state.templateName;
    return Template[templateName];
  },
  collection(){
    const instance = Template.instance()
    console.log(instance.data)
    const collectionName = instance.state.collectionName;
    const findRestriction = instance.state.findRestriction || undefined

    return findRestriction ? collectionName.find(findRestriction) : collectionName.find();
  },
})
