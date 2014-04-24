module.exports = function  (grunt) {
  grunt.initConfig({
    jshint:{
      all:['Gruntfile.js', 'assets/**/*.js']
    },
    less: {
      development: {
        files: {
          "public/css/styles.css": "app/assets/less/*.less"
        }
      }//dev
    },//less
    copy: {
      main: {
        expand: true,
        cwd: 'app/assets/js/',
        src: '**',
        dest: 'public/js',
        flatten: true,
        filter: 'isFile',
      },
    },
    watch:{
      css:{
        files:'app/assets/**',
        tasks:['less','copy','jshint']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default',['less','copy','jshint','watch']);
};