import * as gulp from 'gulp';
const karma = require('gulp-karma-runner');
var Server = require('karma').Server;
import * as config from '../config/projectConfig';
const livereload = require('gulp-livereload');

export function gulpTask() {
    gulp.task('watch', ['live'], function () {
        new Server({
            quiet: true,
            autoWatch: true,
            configFile: config.getConfig().basePath + '/karma.conf.js',
            singleRun: false,
            files: config.getConfig().sourceSpecPath,
            reporters: ['live-html', 'progress']
        }).start();
    });


    gulp.task('live', ['default'], () => {
        livereload.listen({
            basePath: config.getConfig().basePathAppPath
        })
        gulp.watch(config.getConfig().watchfiles, ['default'])
    })



}

