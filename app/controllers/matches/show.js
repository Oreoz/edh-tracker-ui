import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import { run } from "@ember/runloop";

export default Controller.extend({
  store: service(),
  session: service(),
  router: service(),
  playerService: service('player'),

  match: computed.alias('model'),
  uid: computed.alias('session.currentUser.uid'),

  isWorking: false,

  _persistPlayerLifeTotals() {
    this.get('match.players').filterBy('hasDirtyAttributes', true).map(player => player.save());
  },

  actions: {
    modifyPlayerLife(player, increment) {
      player.incrementProperty('life', increment);
      run.debounce(this, this._persistPlayerLifeTotals, 1000);
    },

    reset() {
      this.get('match.players').map(player => player.set('life', 40));
      this.get('match').save();
    },

    async leave() {
      this.toggleProperty('isWorking');

      this.get('match.players')
        .filterBy('uid', this.get('uid'))
        .map(player => this.get('match.players').removeObject(player));

      await this.get('match').save();
      this.get('router').transitionTo('matches');

      this.toggleProperty('isWorking');
    },

    async destroy() {
      await this.get('match').destroyRecord();
      this.get('router').transitionTo('matches');
    }
  }
});
