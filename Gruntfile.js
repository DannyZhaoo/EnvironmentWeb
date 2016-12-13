//包装函数
module.exports=function(grunt){
    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg:grunt.file.readJSON("package.json"),
        //uglify插件的配置信息
        uglify: {
            options: {
              sourceMap: false
          },
          files: {
              expand: true,
              cwd: 'src/',
              src: ['*.js'],
              dest: 'build/js/',
              ext: '.min.js'
          }
        },

        //cssmin插件的配置信息
        cssmin: {
            options: {
              sourceMap: false
          },
          files: {
              expand: true,
              cwd: 'src/',
              src: ['*.css'],
              dest: 'build/css/',
              ext: '.min.css'
          }
      },
        //watch插件的配置信息
        watch: {
            scripts: {
            files: ['src/*.js', 'src/*.css'], // 监控的文件目录
            tasks: ['uglify', 'cssmin'], // 监控到文件发生变化之后执行的任务列表
            options: {
                spawn: false,
            },
        },
    }
});
//告诉grunt我们将使用插件
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');

//告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);
};

