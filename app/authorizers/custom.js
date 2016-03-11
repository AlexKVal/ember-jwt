import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

const { isEmpty } = Ember;

export default BaseAuthorizer.extend({
  authorize(data, block) {
    const accessToken = data['access_token'];
    if (!isEmpty(accessToken)) {
      block('Authorization', `Bearer ${accessToken}`);
    }
  }
});
