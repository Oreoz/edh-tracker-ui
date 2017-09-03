import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import { run } from "@ember/runloop";

export default Controller.extend({
  store: service(),
  session: service(),

  match: computed.alias('model'),
  uid: computed.alias('session.currentUser.uid'),

  _persistPlayerLifeTotals() {
    this.get('match.players')
      .filterBy('hasDirtyAttributes', true)
      .map(player => player.save());
  },

  actions: {
    async addPlayer() {
      let player = this.get('store').createRecord('player');
      this.get('match.players').pushObject(player);

      await this.get('match').save();
    },

    modifyPlayerLife(player, increment) {
      player.incrementProperty('life', increment);
      run.debounce(this, this._persistPlayerLifeTotals, 1000);
    }
  }
});
