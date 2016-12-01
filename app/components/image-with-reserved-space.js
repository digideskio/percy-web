import Ember from 'ember';

export default Ember.Component.extend({
  image: null,
  imageClass: '',

  tagName: 'picture',
  classNames: ['ImageWithReservedSpace'],
  attributeBindings: ['style'],
  style: Ember.computed('image.width', 'image.height', function() {
    let scale = this.get('image.height')*100.0/this.get('image.width');
    return `padding-top: ${scale}%`
  }),

  click() {
    let action = this.get('action');
    if (action) {
      action();
    }
  }
});
