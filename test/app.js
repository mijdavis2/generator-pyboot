'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var testAppName = 'name_x';
var testUserName = 'username_x';

describe('generator-weppy-mvc:app', function () {
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
    assert.fileContent('README.md', testAppName);
    assert.noFileContent('README.md', 'app_name');
    assert.fileContent('README.md', testUserName);
    assert.noFileContent('README.md', 'user_name');
  });
});
