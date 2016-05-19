Package.describe({
  name: "dispatch:mocha-browser",
  summary: "Run package or app tests with Mocha reporting client results in a web browser",
  git: "https://github.com/DispatchMe/meteor-mocha-browser.git",
  version: '0.0.3',
  testOnly: true,
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');

  api.use([
    'dispatch:mocha-core@0.0.2',
    'ecmascript',
  ]);

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});
