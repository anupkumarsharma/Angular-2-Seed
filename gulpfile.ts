import * as fs from 'fs';
import * as gulp from 'gulp';
const yargs: any = require('yargs').argv;
const default_Env_Build = 'qa';

registerTask('./gulp');

// get all the files in gulp directory and register them.
function registerTask(directory: string) {
	let files = fs.readdirSync(directory);
	for (let i = 0; i <= files.length - 1; i++) {
		console.log('Registering gulp task ' + files[i]);
		let importType = require(directory + '/' + files[i]);
		if (importType.gulpTask !== undefined) {
			if (yargs.env === undefined) {
				yargs.env = default_Env_Build;
			}
			importType.gulpTask(yargs.env);
		}

	}

}
