import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reRoute(group) {
      this.sendAction('reRoute', group);
    }
  }
});
