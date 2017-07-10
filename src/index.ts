// keep chunk order defined in entry config

export default class WebpackStableChunkId {
    public options: any;

    constructor(options) {
        this.options = options || {}; // TODO more option, e.g custom chunk sorter
    }

    apply = compiler => {
        compiler.plugin("compilation", function(compilation) {
            compilation.plugin("optimize-chunks", function(chunks) {
                // Unless you've specified multiple entries in your config
                // there's only one chunk at this point
                let i = 0;
                chunks.forEach(function(chunk) {
                    chunk.id = i++;
                });
            });
        });
    };
}
