import * as gulp from 'gulp';
let tslint = require('gulp-tslint');

import * as environment from '../config/projectConfig';


export function gulpTask() {
    gulp.task('lint', () => {
        console.log('Running lint');
        gulp.src(environment.getConfig().sourceCodePath)
            .pipe(tslint())
            .pipe(tslint({
                formatter: "verbose"
            }))
            .pipe(tslint.report({
                emitError: true,
                summarizeFailureOutput: true
            }))
    });
};



