import DS from 'ember-data';
import { computed } from "@ember/object";

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr(),
  creator: attr(),
  size: attr({ defaultValue: 4 }),

  players: hasMany('player'),

  full: computed('players.[]', function () {
    return this.get('players.length') >= this.get('size');
  }),

  displaySize: computed('players.[]', function () {
    return `${this.get('players.length')} / ${this.get('size')}`;
  })
});
