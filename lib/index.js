"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebpackStableChunkId {
    constructor(options) {
        this.apply = compiler => {
            compiler.plugin("compilation", function (compilation) {
                compilation.plugin("optimize-chunks", function (chunks) {
                    let i = 0;
                    chunks.forEach(function (chunk) {
                        chunk.id = i++;
                    });
                });
            });
        };
        this.options = options || {};
    }
}
exports.default = WebpackStableChunkId;
