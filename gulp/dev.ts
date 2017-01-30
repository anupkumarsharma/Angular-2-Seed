
import * as gulp from 'gulp';
const run = require('gulp-run-command').default;

export function gulpTask() {
    gulp.task('dev', run('node_modules/.bin/webpack --config webpack/webpack.dev --watch'));
    gulp.task('build', run('node_modules/.bin/webpack --config webpack/webpack.build'));
};
