var glob = require('glob');
var path = require('path');
var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('namespace', {
      type: String,
      required: true,
      description: 'Generator namespace'
    });

    this.argument('username', {
      type: String,
      required: true,
      description: 'Generator username'
    });
  },

  writing: function () {
    this.fs.copyTpl(
        this.templatePath('*'),
        this.destinationPath(),
        {
          appName: this.namespace,
          appTitle: _.startCase(this.namespace),
          userName: this.username
        }
    );
    this.fs.copyTpl(
        this.templatePath('.*'),
        this.destinationPath(),
        {
          appName: this.namespace,
          appTitle: _.startCase(this.namespace),
          userName: this.username
        }
  );
  }
});
