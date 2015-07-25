import Ember from 'ember';

export default Ember.Component.extend({
  repo: null,
  classes: null,
  isPrimary: false,
  text: 'Enable Repo',

  tagName: 'button',
  classNames: ['RepoEnable', 'Button'],
  classNameBindings: ['classes', 'isPrimary:Button--primary'],

  click: function() {
    this.send('action');
  },
  actions: {
    action: function() {
      this.sendAction('enableRepo', this.get('repo'));
    },
  },
});