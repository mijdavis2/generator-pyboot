'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var testAppName = 'name_x';
var testAppTitle = 'Name X';
var testUserName = 'username_x';

describe('generator-pyboot:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withArguments([testAppName, testUserName])
      .on('end', done);
  });

  it('creates root files', function () {
    assert.file([,
      'requirements.txt',
      '.travis.yml',
      '.coveragerc',
      '.gitignore',
      'setup.sh'
    ]);
  });
  it('creates readme files', function () {
    assert.file([
      'README.md'
    ]);
  });
  it('substitutes placeholders for inputs', function () {
    assert.fileContent('README.md', testAppName);
    assert.fileContent('README.md', testAppTitle);
    assert.fileContent('README.md', testUserName);
    assert.noFileContent('README.md', 'appName');
    assert.noFileContent('README.md', 'appTitle');
    assert.noFileContent('README.md', 'userName');
  });
});
