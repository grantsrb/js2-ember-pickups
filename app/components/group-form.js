import Ember from 'ember';

export default Ember.Component.extend({
  sportChoice: 'Soccer',
  skillChoice: 'All Skill Levels',
  actions: {
    sportChoice(target) {
      this.set('sportChoice', target);
    },
    skillChoice(target) {
      this.set('skillChoice', target);
    },
    makeGroup() {
      var params = {
        sport: this.get('sportChoice'),
        location: this.get('location') ? this.get('location'):'',
        day: this.get('day') ? this.get('day'):'',
        time: this.get('time') ? this.get('time'):'',
        skill: this.get('skillChoice'),
        cost: this.get('cost') ? this.get('cost'):'',
        details: this.get('details') ? this.get('details'):''
      };
      this.set('sportChoice', 'Soccer');
      this.set('skillChoice', "All Skill Levels");
      this.set('location', '');
      this.set('day', '');
      this.set('time', '');
      this.set('cost', '');
      this.set('details', '');
      this.sendAction('makeGroup', params);
    }
  }
});
