import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    makeGroup(params) {
      var newGroup = this.store.createRecord('group', params);
      newGroup.save();
      this.transitionTo('index');
    }
  }
});
