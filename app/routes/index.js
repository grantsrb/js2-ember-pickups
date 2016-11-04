import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('group');
  },
  actions: {
    reRoute(group) {
      this.transitionTo('group-page', group.id);
    }
  }
});
