const passport = require('passport')
const BnetStrategy = require('passport-bnet').Strategy;
const BNET_ID = process.env.BNET_ID
const BNET_SECRET = process.env.BNET_SECRET

// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
		authorizationURL: 'https://oauth.battle.net/authorize',
		tokenURL: 'https://oauth.battle.net/token',
    clientID: BNET_ID,
    clientSecret: BNET_SECRET,
    callbackURL: "https://localhost:3000/auth/bnet/callback",
    region: "apac"
}, 
	function(accessToken: any, refreshToken: any, profile: any, done: any) {
    return done(null, profile, accessToken);
}));

passport.serializeUser(function(user:any, done: any) {
	done(null, user)
})

passport.deserializeUser(function(user:any, done: any) {
	done(null, user)
})