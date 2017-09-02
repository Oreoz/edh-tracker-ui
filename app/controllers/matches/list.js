import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Controller.extend({
  session: service(),

  unauthenticated: computed.not('session.isAuthenticated'),

  matches: computed.alias('model'),

  actions: {
    createMatch() {
      let match = this.get('store').createRecord('match', {
        name: 'Bogus Match',
        creator: this.get('session.currentUser.uid')
      });

      match.save();
    }
  }
});
