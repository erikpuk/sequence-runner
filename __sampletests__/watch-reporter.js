function MyCustomReporter(globalConfig, options) {
    this._globalConfig = globalConfig
    this._options = options
}

MyCustomReporter.prototype.onRunComplete = function(contexts, results) {
    console.log('good')
}

module.exports = MyCustomReporter
