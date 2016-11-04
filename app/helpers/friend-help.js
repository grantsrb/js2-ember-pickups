import Ember from 'ember';

export function friendHelp(params) {
  var rating = parseInt(params);
  var output = "";
  for(var i = 0; i < rating; i++) {
    output = output + "<span class='glyphicon glyphicon-heart'></span>";
  }
  return Ember.String.htmlSafe(output);
}

export default Ember.Helper.helper(friendHelp);
