import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('matches', function() {
    this.route('show', { path: '/:match_id' });
    this.route('list', { path: '/' });
    this.route('new');
  });
  this.route('profile');
});

export default Router;
