import Ember from 'ember';

export default Ember.Component.extend({
  regularDisplay: true,
  displayNewReview: false,
  skillChoice: '',
  sportChoice: '',
  actions: {
    toggleReview(status) {
      if (status) {
        this.set('displayNewReview', false);
      } else {
        this.set('displayNewReview', true);
      }
    },
    cancelNewReview() {
      this.set('displayNewReview', false);
    },
    updateDisplay(status) {
      if(status) {
        this.set('regularDisplay', false);
      } else {
        this.set('skillChoice', this.get('group.skill'));
        this.set('sportChoice', this.get('group.sport'));
        this.set('regularDisplay', true);
      }
    },
    sportChoice(target) {
      this.set('sportChoice', target);
    },
    skillChoice(target) {
      this.set('skillChoice', target);
    },
    deleteGroup() {
      if (confirm('Are you sure you want to delete this group?\nThis cannot be undone.')) {
        this.sendAction('deleteGroup', this.get('group'));
      }
    },
    updateGroup() {
      var params = {
        title: this.get('title')?this.get('title'):this.get('group.title'),
        sport: this.get('sportChoice'),
        location: this.get('location')?this.get('location'):this.get('group.location'),
        day: this.get('day')?this.get('day'):this.get('group.day'),
        time: this.get('time')?this.get('time'):this.get('group.time'),
        skill: this.get('skillChoice'),
        cost: this.get('cost')?this.get('cost'):this.get('group.cost'),
        details: this.get('details')?this.get('cost'):this.get('group.cost'),
      };
      this.set('regularDisplay', true);
      this.sendAction('updateGroup', params, this.get('group'));
    },
    makeReview(params) {
      this.set('displayNewReview', false);
      this.sendAction('makeReview', params);
    },
    activateReview() {
      this.sendAction('activateReview');
    }
  }
});
