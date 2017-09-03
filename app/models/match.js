import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr(),
  creator: attr(),
  size: attr({ defaultValue: 4 }),

  players: hasMany('player')
});
