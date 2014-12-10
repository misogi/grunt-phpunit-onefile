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

```js
grunt.initConfig({
  phpunitOnefile: {
    options: {
      bin: 'vendor/bin/phpunit',
      dirmap: [
        { from: 'src/', to: 'tests/'},
        {
          from: 'module/Application/src/Application',
          to: 'tests/ApplicationTest'
        }
      ]
    }
  }
```

'dirmap' replaces directory path.

For example, changing source file to executing test file.


Licence
=======

@misogi
