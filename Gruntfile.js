module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            server: {
                src: ['app.ts', './server/**/*.ts', '!./server/types/**/*.ts'],
                options: {
                    module: 'commonjs'
                }
            },
            client: {
                src: ['./client/js/**/*.ts', '!./client/js/types/**/*.ts'],
                options: {
                    module: 'amd'
                }
            }
        },
        jshint: {
            files: ['gruntfile.js']
        },
        scsslint: {
            allFiles: [
                './client/css/**/*.scss'
            ]
        },
        concat: {
            options: {
                separator: ';'
            },
            css: {
                src: ['<%= scsslint.allFiles %>'],
                dest: './client/css/<%= pkg.name %>.scss'
            }
        },
        sass: {
            dist: {
                files: {
                    './client/css/<%= pkg.name %>.css': './client/css/<%= pkg.name %>.scss'
                }
            }
        },
        clean: {
            all: [
                'app.js',
                './server/**/*.js',
                './client/js/**/*.js',
                './client/css/<%= pkg.name %>.css',
                './client/css/<%= pkg.name %>.scss'
            ]
        },
        watch: {
            files: ['<%= typescript.server.src %>', '<%= typescript.client.src %>'],
            tasks: ['typescript', 'jshint']
        }

    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean', 'typescript', 'jshint', 'concat', 'sass']);

};
