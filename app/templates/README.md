[![Build Status][travis-img]][travis-url]
[![Coverage Status][coverall-img]][coverall-url]
[![Codacy Badge][codacy-image]][codacy-url]

# <%= app_title %>

## Test

```
py.test -v -s --cov-report term-missing --cov=<%= app_name %> -r w tests
```


## License

MIT


[travis-img]: https://travis-ci.org/<%= user_name %>/<%= app_name %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= user_name %>/<%= app_name %>
[coverall-img]: https://coveralls.io/repos/github/<%= user_name %>/<%= app_name %>/badge.svg?branch=master
[coverall-url]: https://coveralls.io/github/<%= user_name %>/<%= app_name %>?branch=master
[codacy-image]: https://api.codacy.com/project/badge/Grade/ce0ad20ca59947af86b0f17a5779c804
[codacy-url]: https://www.codacy.com/app/<% user_name %>/<% app_name %>?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=<% user_name %>/<% app_name %>&amp;utm_campaign=Badge_Grade
