import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),

  actions: {
    async signIn(provider) {
      await this.get('session').open('firebase', { provider: provider });

      // When the user signs in -- we try and fetch the user profile
      let profile = await this.get('store').query('profile', { limitToFirst: 1 });

      // If there are no user profile -- we create one
      if (!profile.get('firstObject.id')) {
        let uid = this.get('session.currentUser.uid');
        let newUserProfile = this.get('store').createRecord('profile', { uid: uid });
        newUserProfile.save();
      }
    },

    signOut() {
      this.get('session').close();
    }
  }
});
