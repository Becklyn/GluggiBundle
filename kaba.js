const Kaba = require("kaba");

module.exports = (new Kaba())
    .addSassEntries({
        gluggi: "assets/scss/gluggi.scss",
    })
    .disableChunkSplitting()
    .disableFileNameHashing();
