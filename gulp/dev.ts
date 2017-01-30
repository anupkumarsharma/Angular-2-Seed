
import * as gulp from 'gulp';
import run = require('gulp-run-command');
import karma = require('gulp-karma-runner');
import Server = require('karma');
import * as config from '../config/projectConfig';


export function gulpTask() {
    gulp.task('dev', ['watch'], run.default('node_modules/.bin/webpack --config webpack/webpack.dev --watch'));
    gulp.task('watch', () => {
        new Server.Server({
            autoWatch: true,
            configFile: config.getConfig().basePath + '/karma.conf.js',
            files: config.getConfig().sourceSpecPath,
            quiet: true,
            reporters: ['live-html', 'progress'],
            singleRun: false,
        }).start();
        console.log('Live test @ http://localhost:5060');
    });
};
