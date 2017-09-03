import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Component.extend({
  session: service(),
  router: service(),
  store: service(),

  match: null,

  players: computed.alias('match.players'),
  uid: computed.alias('session.currentUser.uid'),

  currentUserIsInMatch: computed('uid', 'players.[]', function () {
    if (this.get('players')) {
      return this.get('players').mapBy('uid').any(uid => uid === this.get('uid'));
    }
    return false;
  }),

  actions: {
    async joinMatch() {
      let player = this.get('store').createRecord('player', {
        uid: this.get('session.currentUser.uid')
      });

      this.get('players').pushObject(player);

      await this.get('match').save();
      this.get('router').transitionTo('matches.show', this.get('match.id'));
    }
  }
});
