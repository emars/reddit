Reddit = {};

var urls = {
//  requestToken: "https://api.Reddit.com/oauth/request_token",
  authorize: "https://www.reddit.com/api/v1/authorize",
  accessToken: "https://www.reddit.com/api/v1/access_token"
//  authenticate: "https://api.Reddit.com/oauth/authenticate"
};

/*
Reddit.whitelistedFields = ['profile_image_url', 'profile_image_url_https', 'lang'];

*/

OAuth.registerService('Reddit', 1, urls, function(oauthBinding) {
  
  var identity = oauthBinding.get('https://api.Reddit.com/1.1/account/verify_credentials.json').data;

  var serviceData = {
    id: identity.id_str,
    screenName: identity.screen_name,
    accessToken: OAuth.sealSecret(oauthBinding.accessToken),
    accessTokenSecret: OAuth.sealSecret(oauthBinding.accessTokenSecret)
  };

  // include helpful fields from Reddit
  var fields = _.pick(identity, Reddit.whitelistedFields);
  _.extend(serviceData, fields);

  return {
    serviceData: serviceData,
    options: {
      profile: {
        name: identity.name
      }
    }
  };
});


Reddit.retrieveCredential = function(credentialToken, credentialSecret) {
  return OAuth.retrieveCredential(credentialToken, credentialSecret);
};
