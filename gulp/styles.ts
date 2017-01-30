// import * as gulp from 'gulp';
// import * as config from '../config/projectConfig';
// const sass = require('gulp-sass');
// const concat = require('gulp-concat');
// const autoprefixer = require('autoprefixer');
// const sourcemaps = require('gulp-sourcemaps');
// const cssnano = require('cssnano');
// const postcss = require('gulp-postcss');

// export function gulpTask(environment: string) {
//     var plugins = [
//         autoprefixer({ browsers: ['last 1 version'] })
//     ];
//     if (environment === config.getConfig().environment().Production.toString()) {
//         console.log('production');
//         plugins.push(cssnano({
//             discardComments: { removeAll: true },
//             discardUnused: false,
//             zindex: false,
//             reduceIdents: false
//         }));
//     }


//     gulp.task('compile.style', function () {
//         gulp.src(config.getConfig().sourceCSSPath)
//             .pipe(sass())
//             .pipe(concat('index.css'))
//             .pipe(sourcemaps.write())
//             .pipe(postcss(plugins))
//             .pipe(gulp.dest(config.getConfig().distFolder));
//     });

// }




