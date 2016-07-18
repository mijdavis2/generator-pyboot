[![Build Status][travis-img]][travis-url]
[![Coverage Status][coverall-img]][coverall-url]
[![Codacy Badge][codacy-image]][codacy-url]

# <%= appTitle %>

<%= packageDescription %>

## Requirements

- Python <%= reqMajor %>.<%= reqMinor %>.<%= reqPatch %>+

## Setup

To automatically install virtualenv and create a new venv,
use the provided setup script:

```
. ./setup.sh -p python<%= reqMajor %>.<%= reqMinor %>.<%= reqPatch %>
```

Otherwise

## Test

```
py.test -v -s --cov-report term-missing --cov=<%= appName %> -r w tests
```


## License

MIT


[travis-img]: https://travis-ci.org/<%= userName %>/<%= appName %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= userName %>/<%= appName %>
[coverall-img]: https://coveralls.io/repos/github/<%= userName %>/<%= appName %>/badge.svg?branch=master
[coverall-url]: https://coveralls.io/github/<%= userName %>/<%= appName %>?branch=master
[codacy-image]: https://api.codacy.com/project/badge/Grade/ce0ad20ca59947af86b0f17a5779c804
[codacy-url]: https://www.codacy.com/app/<%= userName %>/<%= appName %>?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=<%= userName %>/<%= appName %>&amp;utm_campaign=Badge_Grade
