import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition() {
      this.controller.setProperties({errorMessage: null, flash: null});
    }
  }
});
