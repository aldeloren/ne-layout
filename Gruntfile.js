module.exports = function( grunt ) {

  grunt.initConfig({
    sass: {
      dist: { 
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/main.css': 'src/scss/main.scss' 
        }
      }
    },
    watch: {
      css: {
        style: 'compressed',
        files: 'src/scss/main.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['sass']);

};
