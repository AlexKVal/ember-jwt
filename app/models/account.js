import DS from 'ember-data';
import Ember from 'ember';

const { computed, isPresent } = Ember;

export default DS.Model.extend({
  name: DS.attr('string'),
  camelCasedAttribute: DS.attr('string'),

  isValidated: computed('name', 'camelCasedAttribute', function() {
    const {name, camelCasedAttribute} = this.getProperties('name', 'camelCasedAttribute');
    return isPresent(name) && isPresent(camelCasedAttribute);
  })
});
