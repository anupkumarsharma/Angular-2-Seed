const config = {
    sourceCodePath: ['src/app/**/*.ts'],
    sourceCSSPath: ['src/app/**/*.scss'],
    sourceSpecPath: ['src/app/**/*spec.ts'],
    sourceAssets: [
        { type: 'font', path: 'src/app/fonts/**/*' },
        { type: 'libraries', path: 'src/app/libraries/**/*' },
        { type: 'images', path: 'src/app/images/**/*' }],
    distFolder: 'dist',
    environment: () => environmentType,
    basePath: __dirname + '/../',
    basePathAppPath: 'src/app/',
    watchfiles: [
        'src/app/**/*.ts',
        'src/app/**/*.css',
        'src/app**/*.html',
    ],
};

enum environmentType { Production };
export function getConfig() {
    return config;
}
