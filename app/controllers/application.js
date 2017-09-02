import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  actions: {
    createMatch() {
      let match = this.get('store').createRecord('match', { name: 'Bogus Match' });
      match.save();
    }
  }
});
