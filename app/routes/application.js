import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),

  async beforeModel() {
    await this.get('session').fetch().catch(() => {});

    let uid = this.get('session.currentUser.uid');

    if (uid) {
      await this.get('store').query('profile', { uid: uid });
    }
  }
});
