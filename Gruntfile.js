'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    esteWatch: {
      options: {
        dirs: [
        'src/**/',
        'tests/**/'
        ],
        livereload: {
          enabled: false,
        }
      },
      php: function (filepath) {
        var conf = grunt.config('phpunitOnefile');
        conf.filepath = filepath
        console.log(conf);
        grunt.config('phpunitOnefile', conf);
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
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-este-watch');
  grunt.registerTask('default', ['esteWatch']);
};
