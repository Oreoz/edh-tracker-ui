import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),

  actions: {
    async signIn(provider) {
      await this.get('session').open('firebase', { provider: provider });

      let uid = this.get('session.currentUser.uid');
      let profile = await this.get('store').query('profile', { uid: uid });

      if (!profile.get('firstObject.id')) {
        let newProfile = this.get('store').createRecord('profile', { uid: uid });
        newProfile.save();
      }
    },

    signOut() {
      this.get('session').close();
    }
  }
});
