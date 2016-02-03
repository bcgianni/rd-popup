path = require('path');


module.exports = function(grunt){
  grunt.initConfig({
    uglify:{
      options: {
        mangle: false
      },
      my_target: {
        files: { 'dist/main.min.js': ['dist/main.js'] }
      }
    },
    watch: {
      options:{livereload:true},
      uglify:{
        files:'app/*.js',
        tasks:'uglify'
      },
      browserify:{
        files:'app/*.js',
        tasks:'browserify'
      }
    },
    express:{
      all:{
        options:{
          port:8000,
          hostname:'localhost',
          bases:'test',
          livereload:true
        }

      }
    },
    browserify: {
      'test/main.js': ['app/main.js']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('test', ['browserify', 'express', 'watch']);
};
