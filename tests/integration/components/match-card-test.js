import { moduleForComponent, test } from 'ember-qunit';
import Service from "@ember/service";
import hbs from 'htmlbars-inline-precompile';

const sessionStub = Service.extend({ });

moduleForComponent('match-card', 'Integration | Component | match card', {
  integration: true,

  beforeEach() {
    this.register('service:session', sessionStub);
    this.inject.service('session', { as: 'session' });
  }
});

test('it renders', function(assert) {
  assert.expect(4);

  this.render(hbs`{{match-card}}`);

  assert.equal(this.$('.card').length, 1);
  assert.equal(this.$('.card-body').length, 1);
  assert.equal(this.$('.card-title').length, 1);
  assert.equal(this.$('.btn-join-match').length, 1);
});
