import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service(),

  actions: {
    authenticate() {
      this.get('session').authenticate('authenticator:jwt', this.getProperties('id', 'password'))
      .catch((reason) => this.set('errorMessage', reason));
    }
  }
});
