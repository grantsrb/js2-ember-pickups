import Ember from 'ember';

export default Ember.Component.extend({
  skillRatingChoice: '3',
  friendlinessRatingChoice: '3',
  actions: {
    skillRating(target) {
      this.set('skillRatingChoice', target);
    },
    friendlinessRating(target) {
      this.set('friendlinessRatingChoice', target);
    },
    makeReview() {
      var params = {
        author: this.get('author') ? this.get('author'):"Anonymous",
        friendlinessRating: this.get('skillRatingChoice'),
        skillRating: this.get('friendlinessRatingChoice'),
        details: this.get('details') ? this.get('details'):"No description",
        group: this.get('group')
      };
      this.set('author', '');
      this.set('skillRatingChoice', '3');
      this.set('friendlinessRatingChoice', '3');
      this.set('details', '');
      this.sendAction('makeReview', params);
    },
    cancelNewReview() {
      this.sendAction('cancelNewReview');
    }
  }
});
