import Service from "@ember/service";
import { inject as service } from "@ember/service";

export default Service.extend({
  store: service(),
  session: service(),

  createPlayer() {
    let profile = this.get('store').peekAll('profile').get('firstObject');

    let player = this.get('store').createRecord('player', {
      uid: this.get('session.currentUser.uid'),
      commander: profile.get('defaultCommander')
    });

    return player;
  }
});
