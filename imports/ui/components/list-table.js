import './list-table.html';

Template.listTableTmpl.onCreated(function listTableOnCreated() {
  this.autorun(() => {
    this.state = this.data.state.get();
    if (this.state.subscriptionName) {
      this.subscribe(this.state.subscriptionName, this.state.subscriptionArguments);
    }
  });
});

Template.listTableTmpl.helpers({
  template() {
    const instance = Template.instance();
    const templateName = instance.state.templateName;
    return Template[templateName];
  },
  collection() {
    const instance = Template.instance();
    const collection = instance.data.state.get();
    const collectionName = collection.collectionName;
    const findRestriction = collection.findRestriction || undefined;

    return findRestriction ? collectionName.find(findRestriction) : collectionName.find();
  },
  title() {
    const instance = Template.instance();
    const title = instance.data.state.get().title;
    return title;
  },
  placeHolderMessage() {
    const instance = Template.instance();
    const placeHolderMessage = instance.data.state.get().placeHolderMessage;
    return placeHolderMessage;
  },
});
