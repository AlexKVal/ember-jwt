import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }, isEmpty, run, $ } = Ember;

export default BaseAuthenticator.extend({
  tokenEndpoint: 'http://localhost:3001/sessions/create',

  restore(data) {
    if (!isEmpty(data.token)) {
      return Promise.resolve(data);
    } else {
      return Promise.reject();
    }
  },

  authenticate(identification, password) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: this.get('tokenEndpoint'),
        type: 'POST',
        data: JSON.stringify({ username: identification, password }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      })
      .then(
        (response) => run(null, resolve, { token: response.id_token }),
        (xhr) => run(null, reject, xhr.responseJSON || xhr.responseText)
      );
    });
  },

  invalidate() {
    console.log('invalidate...');
    return Promise.resolve();
  }
});
