import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const {Promise, isEmpty, run} = Ember.RSVP;

export default Base.extend({
  tokenEndpoint: 'http://localhost:3001/sessions/create',

  restore(data) {
    return new Promise((resolve, reject) => {
      if (!isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(options) {
    return new Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.tokenEndpoint,
        type: 'POST',
        data: JSON.strinfigy({
          username: options.identification,
          password: options.password
        }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      })
      .then(({response}) => {
        run(() => resolve({ token: response.id_token }));
      }, (xhr) => {
        run(() => reject(xhr.responseText));
      });
    });
  },

  invalidate() {
    console.log('invalidate...');
    return Promise.resolve();
  }
});
