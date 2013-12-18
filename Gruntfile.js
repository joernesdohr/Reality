module.exports = function (grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    "./build/css/style.css": "./src/less/style.less"
                }
            }
            /*
            ,production: {
                options: {
                    paths: ["assets/css"],
                    cleancss: true
                },
                files: {
                    "app/css/master.css": "src/app/css/master.less"
                }
            }
            */
        },

        coffee: {
            glob_to_multiple: {
                expand: true,             // Enable dynamic expansion.
                cwd: 'src/coffeescript/',       // Src matches are relative to this path.
                src: ['**/*.coffee'],     // Actual pattern(s) to match.
                dest: 'js/',          // Destination path prefix.
                ext: '.js',               // Dest filepaths will have this extension.
            }
        },

        watch: {
            css: {
                files: ['./src/less/*'],
                tasks: ['less']
            },
            coffee: {
                files: ['./src/coffeescript/**/*'],
                tasks: ['coffee']
            }
        }
    });

    grunt.registerTask('default', []);

};