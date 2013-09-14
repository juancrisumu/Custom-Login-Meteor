Template.user_loggedout.events({
  'click #login': function (e, tmpl) {
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo']
    }, function (err) {
      if (err) {
        // error handling
      } else {
        // show alert
      }
    });
  }
});

Template.user_loggedin.events({
  'click #logout': function (e, tmpl) {
    Meteor.logout(function (e, tmpl) {
      if (err) {
        // show err message
      } else{
        // show alert that says logged out
      }
    });
  }
}); 