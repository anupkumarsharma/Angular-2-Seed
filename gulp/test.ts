import * as gulp from 'gulp';
const karma = require('gulp-karma-runner');
const Server = require('karma').Server;
import * as config from '../config/projectConfig';
const loadCoverage = require('remap-istanbul/lib/loadCoverage')
const remap = require('remap-istanbul/lib/remap');
export function gulpTask() {
    gulp.task('test', ['cover'], function(done: any) {
        new Server({
            configFile: config.getConfig().basePath + '/karma.conf.js',
            singleRun: true,
            files: config.getConfig().sourceSpecPath
        }, done).start();
    });

    gulp.task('cover', function () {
        const coverage = loadCoverage(config.getConfig().basePath + 'coverage/coverage.json');
        const collector = remap(coverage); /* collector now contains the remapped coverage */
    });


} 