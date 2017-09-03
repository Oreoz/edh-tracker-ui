import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  profile: computed.alias('model'),

  actions: {
    async save() {
      await this.get('profile').save();
    }
  }
});
