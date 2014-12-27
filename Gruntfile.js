/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    clean: {
      wpWeather: {
        src: ['./css', './js/vendor', './fonts'],
        options: {
          force: true
        }
      }
    },
    copy: {
      wpWeather: {
        files: [
          /*Angular copy*/
          {
            src: './bower_components/angular/angular.min.js',
            dest: './js/vendor/angular.min.js'
          }, {
            src: './bower_components/angular/angular.min.js.map',
            dest: './js/vendor/angular.min.js.map'
          }, {
            src: './bower_components/angular/angular-csp.css',
            dest: './css/angular-csp.css'
          }, {
            src: './bower_components/angular-route/angular-route.min.js',
            dest: './js/vendor/angular-route.min.js'
          }, {
            src: './bower_components/angular-route/angular-route.min.js.map',
            dest: './js/vendor/angular-route.min.js.map'
          },
          /*jquery*/
          {
            src: './bower_components/jquery/dist/jquery.min.js',
            dest: './js/vendor/jquery.min.js'
          }, {
            src: './bower_components/jquery/dist/jquery.min.map',
            dest: './js/vendor/jquery.min.map'
          },
          /*Require JS*/
          {
            src: './bower_components/requirejs/require.js',
            dest: './js/vendor/require.js'
          },
          /*underscore*/
          {
            src: './bower_components/underscore/underscore-min.js',
            dest: './js/vendor/underscore-min.js'
          }, {
            src: './bower_components/underscore/underscore-min.map',
            dest: './js/vendor/underscore-min.map'
          },
          /*Bootstrap*/
          {
            src: '*.*',
            dest: './fonts',
            cwd: './bower_components/bootstrap/dist/fonts',
            expand: true
          }, {
            src: './bower_components/bootstrap/dist/css/bootstrap.min.css',
            dest: './css/bootstrap.min.css'
          }
        ]
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        forin: true,
        freeze: true,
        immed: true,
        indent: 2,
        latedef: "nofunc",
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          angular: true,
          define: true,
          jQuery: true,
          $: true,
          require: true
        },
        reporter: require('jshint-stylish')
      },
      wpWeather: ['./Gruntfile.js', './js/**/*.js']
    },
    less: {
      wpWeather: {
        src: './less/wpWeather.less',
        dest: './css/wpWeather.css'
      }
    },
    watch: {
      scripts: {
        files: ['./js/**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false
        }
      },
      styles: {
        files: ['./less/**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false
        }
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('firstrun', ['clean:wpWeather', 'copy:wpWeather']);
  grunt.registerTask('default', ['jshint', 'less','watch']);
};