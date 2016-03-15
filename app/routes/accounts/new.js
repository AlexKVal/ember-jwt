import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('account');
  },

  actions: {
    willTransition() {
      this.controller.setProperties({errorMessage: null, flash: null});
    }
  }
});
