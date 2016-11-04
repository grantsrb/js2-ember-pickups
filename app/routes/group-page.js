import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('group', params.group_id);
  },
  actions: {
    deleteGroup(group) {
      group.destroyRecord();
      this.transitionTo('index');
    },
    updateGroup(params, group) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          group.set(key,params[key]);
        }
      });
      group.save();
      this.transitionTo('group-page', group.id);
    }
  }
});
