'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    phpunit-onefile: {
      classes: {
        dir: './tests/'
      },
      options: {
        bin: 'vendor/bin/phpunit',
        bootstrap: 'bootstrap.php',
        configuration: 'phpunit.xml',
        colors: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-este-watch');
};
