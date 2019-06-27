module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      js: {
        src: ['./grunt/js/1.js', './grunt/js/2.js','./grunt/js/3.js'],
        dest: 'build/JS/Scripts.js',
      },
      css: {
        src: ['./grunt/css/style1.css', './grunt/css/style2.css'],
        dest: 'build/CSS/Styles.css',
      },

      },
    watch: {
        js: {
          files: ['./grunt/JS/**/*.js'],
          tasks: ['concat'],
        },
        css: {
          files: ['./grunt/CSS/**/*.css'],
          tasks: ['concat'],
          },
  }});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');


};
