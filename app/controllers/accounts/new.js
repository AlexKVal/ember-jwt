import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create(name) {
      console.log('create account', name);
      this.store.createRecord('account', {name}).save()
      .then((result) => console.log('return', JSON.stringify(result)))
      .catch((response) => {
        const reason = (response.errors && response.errors[0].detail) || response.message;
        this.set('errorMessage', reason);
        console.log(reason);
      });

      this.set('name', '');
    }
  }
});
