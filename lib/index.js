var WebpackStableChunkId = (function () {
    function WebpackStableChunkId(options) {
        this.apply = function (compiler) {
            compiler.plugin("compilation", function (compilation) {
                compilation.plugin("optimize-chunks", function (chunks) {
                    var i = 0;
                    chunks.forEach(function (chunk) {
                        chunk.id = i++;
                    });
                });
            });
        };
        this.options = options || {};
    }
    return WebpackStableChunkId;
}());
module.exports = WebpackStableChunkId;
