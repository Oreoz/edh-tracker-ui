import { moduleFor, test } from 'ember-qunit';
import Service from "@ember/service";

const sessionStub = Service.extend({
  async fetch() {
    return await '';
  }
});

moduleFor('controller:application', 'Unit | Controller | application', {
  beforeEach() {
    this.register('service:session', sessionStub);
    this.inject.service('session', { as: 'session' });
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
