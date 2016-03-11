import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    login() {
      this.transitionTo('login');
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});
