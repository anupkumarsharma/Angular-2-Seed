module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
          '**/*.spec.ts'
        ],

        exclude: ['node_modules/**/*spec.js'],
        preprocessors: {
          '**/*.ts': ['typescript'],
          'dist/**/!(*spec).js': ['coverage']
        },
        typescriptPreprocessor: {
          options: {
            sourceMap: true, // generate source maps
            noResolve: false // enforce type resolution
          },
          transformPath: function (path) {
            return path.replace(/\.ts$/, '.js');
          }
        },

        reporters: ['progress', 'coverage'],
        coverageReporter: {
          reporters: [{
            type: 'json',
            subdir: '.',
            file: 'coverage.json'
        }]},
          htmlLiveReporter: {
            colorScheme: 'jasmine', // light 'jasmine' or dark 'earthborn' scheme 
            defaultTab: 'summary', // 'summary' or 'failures': a tab to start with 
            // only show one suite and fail log at a time, with keyboard navigation 
            focusMode: true,
          },
          // web server port
          port: 9876,
          colors: true,
          logLevel: config.LOG_INFO,
          browsers: ['PhantomJS'],
          concurrency: Infinity
        })
    }