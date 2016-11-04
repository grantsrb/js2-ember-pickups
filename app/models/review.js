import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  friendlinessRating: DS.attr(),
  skillRating: DS.attr(),
  details: DS.attr(),
  group: DS.belongsTo('group', {async: true})
});
