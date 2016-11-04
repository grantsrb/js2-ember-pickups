import DS from 'ember-data';

export default DS.Model.extend({
  sport: DS.attr(),
  title: DS.attr(),
  image: DS.attr(),
  location: DS.attr(),
  day: DS.attr(),
  time: DS.attr(),
  skill: DS.attr(),
  cost: DS.attr(),
  details: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
