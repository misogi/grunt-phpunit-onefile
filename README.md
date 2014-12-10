grunt-phpunit-onefile
=====================

This plugin watches a change on source & test files and execute phpunit.

It uses grunt-este-watch


install
=======

```
npm install grunt-phpunit-onefile --save-dev
```

```js
grunt.loadNpmTasks('phpunitOnefile');
// if default
grunt.registerTask('default', ['esteWatch']);
```


Configuration
=============

This module depends on (grunt-este-watch)[https://github.com/steida/grunt-este-watch]

```js
grunt.initConfig({
  esteWatch: {
    options: {
      dirs: [
        'src/**/',
        'tests/**/'
      ]
    },
    php: function (filepath) {
      grunt.config(['phpunitOnefile', 'filepath'], filepath);
      return ['phpunitOnefile'];
    }
  },
  phpunitOnefile: {
    options: {
      bin: 'vendor/bin/phpunit',
      dirmap: [
        { from: 'src/', to: 'tests/'}
      ]
    }
  }
  // ....
```

'dirmap' replaces directory path.

For example, changing source file to executing test file.


Licence
=======

@misogi
