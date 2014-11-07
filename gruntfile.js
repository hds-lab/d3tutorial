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
      www: {
        dest: 'www'
      },
      dist: {
        dest: 'dist'
      }
    },

    shell: {
      commit_dist: {
        command: "git add -f dist && git commit -m \"update dist\""
      },
      gh_pages: {
        command: "git subtree push --prefix dist origin gh-pages"
      }
    }
  });

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['bowercopy', 'harp:www']);
  grunt.registerTask('deploy', ['harp:dist', 'shell:commit_dist', 'shell:gh_pages']);

};
