import Ember from 'ember';

export default Ember.Component.extend({
  profile: Ember.inject.service(),
  actions: {
    signIn() {
      this.get('profile').setUserName(this.get('username'));
      this.sendAction('signIn');
    }
  }
});
