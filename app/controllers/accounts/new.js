import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create() {
      const model = this.model;

      model.save()
      .then(() => {
        this.set('flash', `Saved. id:${model.get('id')}`);
      })
      .catch((response) => {
        const reason = (response.errors && response.errors[0].detail) || response.message;
        this.set('errorMessage', reason);
      });
    }
  }
});
