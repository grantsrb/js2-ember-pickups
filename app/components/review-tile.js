import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteReview() {
      this.sendAction('deleteReview', this.get('review'));
    }
  }
});
