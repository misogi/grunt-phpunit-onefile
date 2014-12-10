
'use strict';

module.exports = function (grunt) {

  var exec = require('child_process').exec;

  var logging = function logging(err, stdout, stderr){
    if (err) {
      grunt.fatal(err);
      grunt.log.write(stdout);
    } else {
      grunt.log.write(stdout);
    }
  }

  grunt.registerTask(
    'phpunitOnefile',
    'exec phpunit on one file',
    function() {
      var options = this.options(this.data);
      var path  = grunt.config('phpunitOnefile').filepath;

      options.dirmap.forEach(function(dir){
          path = path.replace(dir.from, dir.to);
        }
      );

      if (path.search(/Test\.php$/) === -1) {
        path = path.replace('.php', 'Test.php');
      }

      var command = options.bin + " --colors " + path;
      console.log(command);

      exec(command, {}, logging);
  });
}
