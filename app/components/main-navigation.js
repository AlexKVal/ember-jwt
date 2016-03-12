import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    login() {
      this.sendAction('onLogin');
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});
