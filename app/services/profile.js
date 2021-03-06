import Ember from 'ember';

export default Ember.Service.extend({
  groups: [],
  userName: '',
  addGroup: function(group) {
    this.get('groups').pushObject(group);
  },
  removeGroup: function(group) {
    var groups = this.get('groups');
    groups.splice(groups.indexOf(group), 1);
  },
  setUserName: function(userName) {
    console.log(userName);
    this.set('userName', userName);
    console.log(this.get('userName'));
  }
});
