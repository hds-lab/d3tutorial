module.exports = function (grunt) {

  var _ = require('lodash');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    harpconf: grunt.file.readJSON('harp.json'),
    conf: {
      dist: 'dist'
    },
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

          //jquery.cookie plugin
          'jquery.cookie/jquery.cookie.js': 'jquery.cookie/jquery.cookie.js',

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
        dest: '<%= conf.dist %>'
      }
    },

    shell: {
      checkout_dist: {
        command: ["rm -rf <%= conf.dist %>",
                  "git clone --single-branch --branch gh-pages <%= pkg.repository %> <%= conf.dist %>"
        ].join(' && ')
      },
      commit_dist: {
        command: ["cd <%= conf.dist %>",
                  "git add --all .",
                  "git commit -m \"update dist\""
        ].join(' && ')
      },
      deploy_dist: {
        command: ["cd <%= conf.dist %>",
                  "git push"
        ].join(' && ')
      }
      //commit_dist: {
      //  command: ["git add -f dist",
      //            "git commit -m \"update dist\"",
      //            "git push"
      //  ].join(' && ')
      //},
      //gh_pages: {
      //  command: [//"git branch -d gh-pages || true",
      //            //"git push origin :gh-pages",
      //            "git subtree push --prefix dist origin gh-pages"
      //  ].join(' && ')
      //}
    }
  });

  grunt.registerTask('harpjson_restore', function() {
    if (grunt.file.exists('harp.json.bak')) {
      grunt.file.copy('harp.json.bak', 'harp.json');
      grunt.file.delete('harp.json.bak');
      console.log("Original harp.json restored.");
    }
  });

  grunt.registerTask('harpjson_setup', function(url) {

    if (url === 0 || url === undefined) {
      url = grunt.config('pkg').homepage;
    }

    var backed_up = false;
    var harpconf = grunt.config('harpconf');
    if (harpconf.globals.baseUrl != url) {

      if (grunt.file.exists('harp.json.bak')) {
        grunt.fail.fatal("Backup file harp.json.bak already exists!");
      }

      console.log("Temporarily overriding harp.json...");
      //Backup the old file
      grunt.file.copy('harp.json', 'harp.json.bak');

      //Make a new conf
      harpconf = _.cloneDeep(harpconf);
      harpconf.globals.baseUrl = url;

      //Save the conf
      grunt.file.write('harp.json', JSON.stringify(harpconf, undefined, 2));
      backed_up = true;
    }

    //Now build the dist folder
    console.log("Building site for " + url);
  });

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['bowercopy', 'harp:www']);
  grunt.registerTask('deploy', ['harpjson_setup', 'shell:checkout_dist', 'harp:dist', 'harpjson_restore', 'shell:commit_dist', 'shell:deploy_dist']);

};
