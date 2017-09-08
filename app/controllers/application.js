import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),

  actions: {
    async signIn(provider) {
      await this.get('session').open('firebase', { provider: provider });

      // When the user signs in -- we try and fetch the user profile
      let uid = this.get('session.currentUser.uid');
      this.get('store').findRecord('profile', uid).then(() => {
        // Do nothing, for now...
      }, async () => {
        let profile = this.get('store').createRecord('profile', { id: uid });
        await profile.save().catch(() => {});
      });
    },

    signOut() {
      this.get('session').close();
    }
  }
});
