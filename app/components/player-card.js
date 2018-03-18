import Component from '@ember/component';
import { observer } from '@ember/object';
import { debounce } from '@ember/runloop';

export default Component.extend({
  classNames: 'player-card text-center',
  classNameBindings: ['state'],

  state: 'player-card--default',

  setState(state) {
    this.set('state', `player-card--${state}`);
  },

  init() {
    this._super(...arguments);
    this.set('snapshot', this.get('player.life'));
  },

  lifeObs: observer('player.life', function() {
    const snapshot = this.get('snapshot');
    const life = this.get('player.life');

    if (life > snapshot) {
      this.setState('success');
    } else {
      this.setState('danger');
    }

    this.set('snapshot', life);

    debounce(this, this.setState, 'default', 2000);
  }),
});
