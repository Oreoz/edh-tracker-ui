import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),

  async beforeModel() {
    await this.get('session').fetch().catch(() => {});

    if (this.get('session.currentUser.uid')) {
      await this.get('store')
        .findRecord('profile', this.get('session.currentUser.uid'))
        .catch(() => {});
    }
  }
});
