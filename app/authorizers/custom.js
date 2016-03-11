import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

const {isEmpty} = Ember;

export default Base.extend({
  authorize(jqXHR) {
    const accessToken = this.get('session.content.secure.token');
    if (this.get('session.isAuthenticated') && !isEmpty(accessToken)) {
      jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    }
  }
});
