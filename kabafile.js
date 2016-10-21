const kaba = require("kaba");

const scss = kaba.shelf.scss({
    input: "Resources/assets/scss"
});

kaba.task("scss", scss);

kaba.task("", kaba.task("scss"));
kaba.task("release", kaba.task(""));
