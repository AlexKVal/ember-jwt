import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service(),

  actions: {
    authenticate() {
      const {identification: id, password} = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:jwt', {id, password})
      .catch((reason) => this.set('errorMessage', reason));
    }
  }
});
