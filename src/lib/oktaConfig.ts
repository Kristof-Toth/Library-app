export const oktaConfig = {
  clientId: "0oab64y215DMi5Src5d7",
  issuer: "https://dev-64302847.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scope: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
