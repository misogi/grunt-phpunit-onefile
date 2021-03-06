
'use strict';

var fs = require('fs')

module.exports = function (grunt) {

  var exec = require('child_process').exec;

  var logging = function logging(err, stdout, stderr){
    if (stderr) {
      grunt.log.write(stderr);
    }

    if (err) {
      grunt.fatal(err);
      grunt.log.write(stdout);
    } else {
      grunt.log.write(stdout);
    }
  }

  var execTest = function execTest(err, fd) {

  }

  grunt.registerTask(
    'phpunitOnefile',
    'exec phpunit on one file',
    function() {
      var options = this.options(this.data);
      var path  = grunt.config('phpunitOnefile').filepath;

      if (path === undefined) {
        grunt.fatal('file not found.');
        return;
      }

      options.dirmap.forEach(function(dir){
          path = path.replace(dir.from, dir.to);
        }
      );

      if (path.search(/Test\.php$/) === -1) {
        path = path.replace('.php', 'Test.php');
      }

      fs.open(path, 'r', 444, function(err, fd){
        if (err) {
          return false;
        }

        var command = options.bin + " " + path;
        grunt.log.ok(command);

        exec(command, {}, logging);
        return true;
      });
  });
}
