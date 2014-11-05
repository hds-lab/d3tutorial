module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowercopy: {
      options: {},

      vendor: {
        options: {
          destPrefix: 'public/vendor'
        },
        files: {
          //jquery library
          'jquery': 'jquery/dist/jquery.*',

          //jquery.splitter plugin
          'jquery.splitter/jquery.splitter.js': 'jquery.splitter/js/jquery.splitter-0.14.0.js',
          'jquery.splitter/jquery.splitter.css': 'jquery.splitter/css/jquery.splitter.css',

          //bootstrap
          'bootstrap/js': 'bootstrap/dist/js/*.js',
          'bootstrap/fonts': 'bootstrap/dist/fonts/*'
        }
      }
    },

    harp: {
      server: {
        server: true
      },
      dist: {
        dest: 'www'
      }
    }
  });

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['bowercopy', 'harp:dist']);

};
