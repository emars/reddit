Package.describe({
  name: 'reddit',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Reddit API + OAuth Flow',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/emars/reddit.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use('http', ['client', 'server']);
  api.use('templating', 'client');
  api.use('oauth1', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('random', 'client');
  api.use('underscore', 'server');
  api.use('service-configuration', ['client', 'server']);

  api.export('Reddit');

  api.addFiles(
    ['reddit_configure.html', 'reddit_configure.js'],
    'client');

  api.addFiles('reddit_server.js', 'server');
  api.addFiles('reddit_client.js', 'client');

});
