import Controller from "@ember/controller";
import { computed } from "@ember/object";
import { run } from "@ember/runloop";

export default Controller.extend({
  profile: computed.alias('model'),

  displaySucessMessage: false,
  disableSave: false,

  hideSuccessMessage() {
    this.set('displaySucessMessage', false);
    this.set('disableSave', false);
  },

  actions: {
    save() {
      this.get('profile').save().then(() => {
        this.set('displaySucessMessage', true);
        this.set('disableSave', true);
        run.later(this, this.hideSuccessMessage, 5000);
      }, () => {

      });
    }
  }
});
