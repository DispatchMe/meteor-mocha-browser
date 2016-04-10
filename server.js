import Mocha from 'mocha';

const reporter = process.env.SERVER_TEST_REPORTER || 'spec';

// Initialize a new `Mocha` test runner instance
const mainMocha = new Mocha();

// Use practicalmeteor:mocha-core to bind the Meteor environment and support
// synchronous server code.
Package['practicalmeteor:mocha-core'].setupGlobals(mainMocha);

// Before Meteor calls the `start` function, app tests will be parsed and loaded by Mocha
function start() {
  // We need to set the reporter when the tests actually run to ensure no conflicts with
  // other test driver packages that may be added to the app but are not actually being
  // used on this run.
  mainMocha.reporter(reporter);

  mainMocha.run();
}

export { start };
