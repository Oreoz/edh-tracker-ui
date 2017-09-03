import { moduleFor, test } from 'ember-qunit';
import Service from "@ember/service";

const sessionStub = Service.extend({ });

moduleFor('route:matches/new', 'Unit | Route | matches/new', {
  beforeEach() {
    this.register('service:session', sessionStub);
    this.inject.service('session', { as: 'session' });
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
