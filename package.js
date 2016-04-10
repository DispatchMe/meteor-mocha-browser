Package.describe({
  name: "dispatch:mocha-browser",
  summary: "Run package or app tests with Mocha reporting client results in a web browser",
  git: "https://github.com/DispatchMe/meteor-mocha-browser.git",
  version: '0.0.1',
  testOnly: true,
});

Npm.depends({
  mocha: '2.4.5',
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');

  api.use('ecmascript');

  api.use([
    'practicalmeteor:mocha-core@0.1.4',
  ], 'server');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});
