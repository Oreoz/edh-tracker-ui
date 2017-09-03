import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  store: service(),
  session: service(),

  async init() {
    this._super(...arguments);

    await this.get('session').fetch();

    if (this.get('session.isAuthenticated')) {
      this.transitionToRoute('matches');
    }
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
