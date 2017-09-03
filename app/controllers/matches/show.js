import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Controller.extend({
  store: service(),
  session: service(),

  match: computed.alias('model'),

  actions: {
    async addPlayer() {
      let player = this.get('store').createRecord('player');
      this.get('match.players').pushObject(player);

      await this.get('match').save();
    },

    modifyLife(player, increment) {
      player.incrementProperty('life', increment);
      player.save();
    }
  }
});
