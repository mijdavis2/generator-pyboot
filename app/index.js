'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  _defaultYear: function () {
    return (new Date).getFullYear();
  },

  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.log(yosay(
      chalk.red('Welcome!') + '\n' +
      chalk.yellow('You\'re using the pyboot generator for scaffolding a python project!')
    ));
  },

  prompting: function () {
    return this.prompt([
      {
        type    : 'input',
        name    : 'useDirectory',
        message : 'Target directory for new application (default is current directory): \n',
        default : this.appname // Default to current folder name
      },
      {
        type   : 'input',
        name   : 'packageName',
        message: 'Your project name: ',
        default: this.appname // Default to current folder name
      },
      {
        type   : 'input',
        name   : 'packageDescription',
        message: 'A description of your package: '
      },
      {
        type   : 'input',
        name   : 'username',
        message: 'Your github username: '
      },
      {
        type   : 'list',
        name   : 'pythonVersion',
        message: 'What minimum python version will you support?',
        choices: [
          {
            value: ['3', '5', '2'],
            name : '3.5.2'
          },
          {
            value: ['3', '4', '5'],
            name : '3.4.5'
          },
          {
            value: ['3', '4', '3'],
            name : '3.4.3'
          },
          {
            value: ['2', '7', '11'],
            name : '2.7.11'
          },
          {
            value: ['2', '7', '10'],
            name : '2.7.10'
          },
          {
            value: ['2', '7', '9'],
            name : '2.7.9'
          },
          {
            value: ['2', '7', '8'],
            name : '2.7.8'
          }
        ]
      },
      {
        name   : 'license',
        message: 'Select license:',
        type   : 'list',
        choices: [
          {
            value: 'MIT',
            name : 'MIT'
          },
          {
            value: 'ApacheV2',
            name : 'Apache v2'
          },
          {
            value: null,
            name : 'None'
          }
        ]
      }
    ]).then(function (answers) {
      this.log('package name', answers.packageName);
      this.log('python version', answers.pythonVersion);
      this.answers = answers;
      if (this.answers.license) {
        this.answers.includeLicense = 'include LICENSE';
      } else {
        this.answers.includeLicense = '';
      }
    }.bind(this));
  },

  writing: function () {
    this._templateMap = {
      packageName: this.answers.packageName,
      appName: this.answers.packageName,
      appTitle: _.startCase(this.answers.packageName),
      reqMajor: this.answers.pythonVersion[0],
      reqMinor: this.answers.pythonVersion[1],
      reqPatch: this.answers.pythonVersion[2],
      username: this.answers.username,
      userName: this.answers.username,
      packageDescription: this.answers.packageDescription,
      license: this.answers.license,
      year: this._defaultYear(),
      includeLicense: this.answers.includeLicense
    };
    if (this.answers.useDirectory !== this.appname) {
      this.destinationRoot(this.answers.useDirectory);
    }
    this.fs.copyTpl(
      this.templatePath('*'),
      this.destinationRoot(),
      this._templateMap
    );
    this.fs.copyTpl(
      this.templatePath('my_app/*'),
      this.destinationPath(this.answers.packageName + '/'),
      this._templateMap
    );
    this.fs.copyTpl(
      this.templatePath('tests/*'),
      this.destinationPath('tests/'),
      this._templateMap
    );
    this.fs.copyTpl(
      this.templatePath('dot_github/*'),
      this.destinationPath('.github/'),
      this._templateMap
    );
    this.fs.copyTpl(
      this.templatePath('dotfiles/.*'),
      this.destinationRoot(),
      this._templateMap
    );
    if (this.answers.license) {
      this.fs.copyTpl(
        this.templatePath('licenses/' + this.answers.license),
        this.destinationPath('LICENSE'),
        this._templateMap
      );
    }
  },

  install: function () {
    // this.installDependencies();
  }
});
