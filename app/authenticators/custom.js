import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

const { RSVP, isEmpty, run } = Ember;

export default BaseAuthenticator.extend({
  tokenEndpoint: 'http://localhost:3001/sessions/create',

  restore(data) {
    return new RSVP.Promise((resolve, reject) => {
      if (!isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(identification, password) {
    return new RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.get('tokenEndpoint'),
        type: 'POST',
        data: JSON.stringify({ username: identification, password }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      })
      .then((response) => run(() => resolve({ token: response.id_token })),
      (xhr) => run(() => reject(xhr.responseJSON || xhr.responseText)));
    });
  },

  invalidate() {
    console.log('invalidate...');
    return RSVP.Promise.resolve();
  }
});
