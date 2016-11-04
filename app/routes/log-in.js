import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn() {
      this.transitionTo('profile-page');
    }
  }
});
