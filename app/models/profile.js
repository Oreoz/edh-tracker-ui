import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  uid: attr({ defaultValue: null }),
  displayName: attr({ defaultValue: 'Zada, Hedron Grinder' })
});
