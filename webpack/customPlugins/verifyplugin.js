var _userOptions;

function verifyPlugin(userOptions) {
    _userOptions = userOptions;
};
verifyPlugin.prototype.apply = function (compiler) {
    compiler.plugin('emit', function (compilation, callback) {
        if (_userOptions.breakBuild != undefined) {
            if (_userOptions.breakBuild == true) {
                throw new Error('Verify Plugin failed, due to build breaker boolean flag.Reason can be Environment flag missing in EnvironmentConfig.js');
                process.exit(1);
            }
        }
        console.log(_userOptions)
        callback();
    });

}

module.exports = verifyPlugin;