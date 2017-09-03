import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  uid: attr({ defaultValue: null }),
  commander: attr({ defaultValue: '' }),
  life: attr({ defaultValue: 40 })
});
