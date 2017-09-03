import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),

  actions: {
    async signIn(provider) {
      await this.get('session').open('firebase', { provider: provider });
    },

    signOut() {
      this.get('session').close();
    }
  }
});
