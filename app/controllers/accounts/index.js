import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(account) {
      account.destroyRecord()
      .catch((response) => {
        const reason = (response.errors && response.errors[0].detail) || response.message;
        this.set('errorMessage', reason);
      });
    }
  }
});
