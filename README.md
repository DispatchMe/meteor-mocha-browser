# dispatch:mocha-browser

A Mocha test driver package for Meteor 1.3. This package reports server results in the server console and client results in a browser.

This package cannot be used for running tests on a CI server. For that, see [dispatch:mocha-phantomjs](https://github.com/DispatchMe/meteor-mocha-phantomjs).

## Installation

In a Meteor 1.3+ app directory:

```bash
meteor add dispatch:mocha-browser
```

## Run app unit tests

```bash
meteor test --driver-package dispatch:mocha-browser
```

You will see the results of any server tests in the server console. Then go to `http://localhost:3000` in any browser to run and see the results of any client tests. As you make changes and save files, the server tests will rerun and the client test results in your browser will refresh.

### Run with a different server reporter

The default Mocha reporter for server tests is the "spec" reporter. You can set the `SERVER_TEST_REPORTER` environment variable to change it.

```bash
SERVER_TEST_REPORTER="dot" meteor test --driver-package dispatch:mocha-browser
```

### Run with a different client reporter

The default Mocha reporter for client tests is the "HTML" reporter. You can set the `CLIENT_TEST_REPORTER` environment variable to the name of a different Node module to provide your own browser reporter.

```bash
CLIENT_TEST_REPORTER="my-browser-reporter" meteor test --driver-package dispatch:mocha-browser
```
