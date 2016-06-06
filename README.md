[![NPM version][npm-image]][npm-url] 
[![Build Status][travis-image]][travis-url] 
[![Coverage percentage][coveralls-image]][coveralls-url] 
[![Codacy Badge][codacy-image]][codacy-url]

# generator-pyboot
 
[![NPM][npm-info-image]][npm-info-url]

Bootstrap a new python project.

## Features

- Easy virtualenv setup script
- README.md
- Travis-Ci yml setup
- Gitignore with the usual suspects.
- Pre-populated requirements.txt

## Installation

Requires [npm](https://www.npmjs.com/).

```
npm install -g yo
npm install -g generator-pyboot
```

## Usage

```
mkdir <app_name>
cd <app_name>
yo weppy-mvc <app_name> <github_username>
```

- **app_name:** What you want your application to be called.
- **github_username:** Used to create links/badges for your readme.

## Testing

``` 
mocha
```

## License

MIT © [mijdavis2](http://mdavisinsc.com)


[npm-image]: https://badge.fury.io/js/generator-pyboot.svg
[npm-url]: https://npmjs.org/package/generator-pyboot
[travis-image]: https://travis-ci.org/mijdavis2/generator-pyboot.svg?branch=master
[travis-url]: https://travis-ci.org/mijdavis2/generator-pyboot
[coveralls-image]: https://coveralls.io/repos/mijdavis2/generator-pyboot/badge.svg
[coveralls-url]: https://coveralls.io/r/mijdavis2/generator-pyboot
[codacy-image]: https://api.codacy.com/project/badge/Grade/ce0ad20ca59947af86b0f17a5779c804
[codacy-url]: https://www.codacy.com/app/mijdavis2/generator-pyboot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mijdavis2/generator-pyboot&amp;utm_campaign=Badge_Grade
[npm-info-image]: https://nodei.co/npm/generator-pyboot.png?downloads=true&downloadRank=true&stars=true
[npm-info-url]: https://nodei.co/npm/generator-pyboot/
