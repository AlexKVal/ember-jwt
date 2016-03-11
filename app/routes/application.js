import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    login() {
      this.transitionTo('login');
    },

    logout() {
      const session = this.get('session');
      if (session.get('isAuthenticated')) {
        session.invalidate();
      }
    }
  }
});
