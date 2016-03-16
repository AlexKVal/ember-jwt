import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  isSaveDisabled: computed('model.isValidated', 'model.hasDirtyAttributes', function() {
    const {isValidated, hasDirtyAttributes} =
      this.model.getProperties('isValidated', 'hasDirtyAttributes');
    return !isValidated || !hasDirtyAttributes;
  }),

  actions: {
    save() {
      const model = this.model;
      if (model.get('hasDirtyAttributes')) {
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
  }
});
