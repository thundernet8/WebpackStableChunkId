"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = WebpackStableChunkId;
