import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),

  model() {
    return this.get('store').createRecord('match', {
      creator: this.get('session.currentUser.uid')
    });
  },

  actions: {
    willTransition() {
      if (this.controller.get('match.isNew')) {
        this.controller.get('match').destroyRecord();
      }
    }
  }
});
