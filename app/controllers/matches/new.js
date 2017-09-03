import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),
  playerService: service('player'),

  match: computed.alias('model'),

  sizes: computed(function () {
    return [ 1, 2, 3, 4, 5, 6 ];
  }),

  actions: {
    async createMatch() {
      let player = this.get('playerService').createPlayer();
      this.get('match.players').pushObject(player);

      await this.get('match').save();

      this.transitionToRoute('matches.show', this.get('match.id'));
    }
  }
});
