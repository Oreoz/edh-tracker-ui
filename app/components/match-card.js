import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Component.extend({
  router: service(),
  store: service(),
  playerService: service('player'),

  classNames: 'match-card p-2',
  classNameBindings: ['state'],

  state: computed('currentUserIsInMatch', function() {
    return this.get('currentUserIsInMatch') ? 'match-card--active' : 'match-card--default';
  }),

  match: null,

  players: computed.alias('match.players'),

  currentUserIsInMatch: computed('uid', 'players.@each.uid', function () {
    if (this.get('players')) {
      return this.get('players').mapBy('uid').any(uid => uid === this.get('uid'));
    }
    return false;
  }),

  actions: {
    async join() {
      let player = this.get('playerService').createPlayer();
      this.get('players').pushObject(player);

      await this.get('match').save();
      this.get('router').transitionTo('matches.show', this.get('match.id'));
    }
  }
});
