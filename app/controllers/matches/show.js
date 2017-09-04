import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import { run } from "@ember/runloop";

export default Controller.extend({
  store: service(),
  session: service(),
  playerService: service('player'),

  match: computed.alias('model'),
  uid: computed.alias('session.currentUser.uid'),

  _persistPlayerLifeTotals() {
    this.get('match.players')
      .filterBy('hasDirtyAttributes', true)
      .map(player => player.save());
  },

  actions: {
    modifyPlayerLife(player, increment) {
      player.incrementProperty('life', increment);
      run.debounce(this, this._persistPlayerLifeTotals, 1000);
    },

    resetGame() {
      this.get('match.players').map(p => p.set('life', 40));
      this.get('match').save();
    }
  }
});
