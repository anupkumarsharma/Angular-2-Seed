import * as gulp from 'gulp';
import run = require('gulp-run-command');

export function gulpTask() {
    gulp.task('build', run.default('node_modules/.bin/webpack --config webpack/webpack.build'));
};
