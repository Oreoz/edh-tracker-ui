import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  session: service(),
  router: service(),
  store: service(),

  match: null,

  actions: {
    async joinMatch() {
      let player = this.get('store').createRecord('player', {
        uid: this.get('session.currentUser.uid')
      });

      await player.save();
      this.get('match.players').pushObject(player);

      await this.get('match').save();
      this.get('router').transitionTo('matches.show', this.get('match.id'));
    }
  }
});
