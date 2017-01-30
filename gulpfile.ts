import * as fs from 'fs';
import * as gulp from 'gulp';
const yargs = require('yargs').argv;

registerTask('./gulp');
//gulp  --production
console.log(yargs.production);
gulp.task('default', () => {
	console.log('Gulp is running!');
});

// get all the files in gulp directory and register them.
function registerTask(directory: string) {
	let files = fs.readdirSync(directory);
	for (let i = 0; i <= files.length - 1; i++) {
		console.log('Registering gulp task ' + files[i]);
		let importType = require(directory + '/' + files[i]);
		if (importType.gulpTask !== undefined) {
			console.log(importType.gulpTask);
			importType.gulpTask();
		}

	}

}
