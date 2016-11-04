import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('group', params.group_id);
  },
  actions: {
    deleteGroup(group) {
      var reviewDeletions = group.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(reviewDeletions).then(function() {
        return group.destroyRecord();
      });
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
    },
    makeReview(params) {
      var newReview = this.store.createRecord('review', params);
      var group = params.group;
      group.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return group.save();
      });
      this.transitionTo('group-page', group.id);
    },
    deleteReview(review) {
      review.destroyRecord();
      this.transitionTo('group-page');
    },
    addedFavorite(group) {
      this.transitionTo('group-page', group.id);
    }
  }
});
