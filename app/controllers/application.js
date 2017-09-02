import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  store: service(),
  session: service(),

  beforeModel() {
    return this.get('session').fetch().catch(() => { });
  },

  actions: {
    signIn(provider) {
      this.get('session').open('firebase', { provider: provider }).then(() => {

      }, () => {

      });
    },

    signOut() {
      this.get('session').close();
    }
  }
});
