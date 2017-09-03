import { moduleFor, test } from 'ember-qunit';
import Service from "@ember/service";

const sessionStub = Service.extend({ });

moduleFor('service:player', 'Unit | Service | player', {
  beforeEach() {
    this.register('service:session', sessionStub);
    this.inject.service('session', { as: 'session' });
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
