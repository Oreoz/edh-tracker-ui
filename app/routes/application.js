import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),

  async beforeModel() {
    await this.get('session').fetch();

    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  }
});
