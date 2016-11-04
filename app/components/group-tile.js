import Ember from 'ember';

export default Ember.Component.extend({
  header: Ember.computed('group.title', 'group.sport', function() {
    return this.get("group.title") + " " + this.get('group.sport');
  }),
  actions: {
    reRoute(group) {
      this.sendAction('reRoute', group);
    }
  }
});
