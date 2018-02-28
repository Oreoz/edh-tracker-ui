import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('matches', function() {
    this.route('show', { path: '/:match_id' });
    this.route('list', { path: '/' });
    this.route('new');
  });
  this.route('profile', { path: '/my-profile' });
});

export default Router;
