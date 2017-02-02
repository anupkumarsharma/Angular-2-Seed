import * as gulp from 'gulp';
import run = require('gulp-run-command');


export function gulpTask(env: string) {
    // tslint:disable-next-line:max-line-length
    gulp.task('build', run.default('node_modules/.bin/webpack --config webpack/webpack.build --define ' + env));
};
