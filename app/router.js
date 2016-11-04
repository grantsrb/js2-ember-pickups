import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new-group');
  this.route('group-page', {path: 'group-page/:group_id'});
  this.route('profile-page');
  this.route('log-in');
});

export default Router;
