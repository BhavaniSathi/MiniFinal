function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    console.log("hiiiii");
    var profile = googleUser.getBasicProfile();
    // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    // console.log('Full Name: ' + profile.getName());
    // console.log('Given Name: ' + profile.getGivenName());
    // console.log('Family Name: ' + profile.getFamilyName());
    // console.log("Image URL: " + profile.getImageUrl());
    // console.log("Email: " + profile.getEmail());
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    window.location.href="/main";
  }