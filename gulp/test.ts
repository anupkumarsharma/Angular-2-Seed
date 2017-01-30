// Since testing is just karma run, we can use webpack to execute it too. 
// Using gulp however since its support far more plugins then webpack and its very flexible to configure.
import * as gulp from 'gulp';
import * as environment from '../config/projectConfig';
import karma = require('gulp-karma-runner');
import Server = require('karma');
import remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
import del = require('del');


export function gulpTask() {

    gulp.task('test', ['clean.cover', 'karma', 'remap-istanbul']);

    gulp.task('karma', (done) => {
        new Server.Server({
            configFile: environment.getConfig().basePath.toString() + '/karma.conf.js',
            files: environment.getConfig().sourceSpecPath,
            singleRun: true,
        }, done).start();
    });

    gulp.task('clean.cover', () => {
        del(environment.getConfig().basePath.toString() + 'coverage/');
    });

    gulp.task('remap-istanbul', () => {
        gulp.src(environment.getConfig().basePath.toString() + 'coverage/coverage.json')
            .pipe(remapIstanbul())
            .pipe(gulp.dest(environment.getConfig().basePath.toString() + 'coverage/'));
    });

}




