// We need to import the "mocha.js" file specifically because that is the browser entry point.
import 'mocha/mocha.js';

let reporter;
if (process.env.CLIENT_TEST_REPORTER) {
  reporter = require(process.env.CLIENT_TEST_REPORTER);
} else {
  reporter = 'HTML';

  // Add the CSS from CDN
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', 'https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.css');
  document.head.appendChild(link);
}

// This defines "describe", "it", etc.
mocha.setup({
  ui: 'bdd',
});

// Add the div#mocha in which test results HTML will be placed
const div = document.createElement('div');
div.setAttribute('id', 'mocha');
document.body.appendChild(div);

// Run the client tests. Meteor calls the `runTests` function exported by
// the driver package on the client.
function runTests() {
  // We need to set the reporter when the tests actually run. This ensures that the
  // correct reporter is used in the case where `dispatch:mocha-phantomjs` is also
  // added to the app. Since both are testOnly packages, top-level client code in both
  // will run, potentially changing the reporter to the console reporter.
  mocha.setup({ reporter });

  mocha.run();
}

export { runTests };
