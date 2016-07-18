'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

var testPackageName = 'testPackage';
var testPythonVersion = '2.7.9';
var testUsername = 'testUserName';
var testPackageDescription = 'This is a test package';

var baseFiles = [
  'CHANGELOG.md',
  '.gitignore',
  '.travis.yml',
  '.coveragerc',
  'README.md',
  'requirements.txt',
  'setup.sh',
  'tests/__init__.py',
  testPackageName + '/__init__.py'
];

describe('generator-pyboot:with-MIT', function () {
  this.timeout(10000);

  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        packageName: testPackageName,
        pythonVersion: testPythonVersion,
        username: testUsername,
        packageDescription: testPackageDescription,
        license: 'MIT'
      })
      .toPromise();
  });

  it('creates base files', function (done) {
    assert.file(baseFiles);
    done();
  });
  it('creates LICENSE file', function (done) {
    assert.file('LICENSE');
    done();
  });
});

describe('generator-pyboot:with-MIT', function () {
  this.timeout(10000);

  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        packageName: testPackageName,
        pythonVersion: testPythonVersion,
        username: testUsername,
        packageDescription: testPackageDescription,
        license: 'ApacheV2'
      })
      .toPromise();
  });

  it('creates base files', function (done) {
    assert.file(baseFiles);
    done();
  });
  it('creates LICENSE file', function (done) {
    assert.file('LICENSE');
    done();
  });
});

describe('generator-pyboot:no-license', function () {
  this.timeout(10000);

  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        packageName: testPackageName,
        pythonVersion: testPythonVersion,
        username: testUsername,
        packageDescription: testPackageDescription,
        license: null
      })
      .toPromise();
  });

  it('creates base files', function (done) {
    assert.file(baseFiles);
    done();
  });

  it('does not create LICENSE file', function (done) {
    assert.noFile([
      'LICENSE'
    ]);
    done();
  });
});

describe('generator-pyboot:subdirectory', function () {
  this.timeout(10000);

  before(function () {
    return helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        packageName: testPackageName,
        pythonVersion: testPythonVersion,
        username: testUsername,
        packageDescription: testPackageDescription,
        license: null,
        useDirectory: 'testSubDirectory'
      })
      .toPromise();
  });

  it('creates base files', function (done) {
    assert.file(baseFiles);
    done();
  });

  it('does not create LICENSE file', function (done) {
    assert.noFile([
      'LICENSE'
    ]);
    done();
  });
});
