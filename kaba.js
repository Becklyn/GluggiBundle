const Kaba = require("kaba");

module.exports = (new Kaba())
    .addSassEntries({
        gluggi: "assets/scss/gluggi.scss",
    })
    .addJavaScriptEntries({
        gluggi: "assets/js/gluggi.ts",
    })
    .disableChunkSplitting()
    .disableFileNameHashing();
