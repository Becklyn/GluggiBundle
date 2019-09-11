import {findOne} from "mojave/dom/traverse";
import {parseElementAsJson} from "mojave/json";
import {mount} from "mojave/mount";
import {initToggleFullScreen} from "./gluggi/full-screen";
import {GluggiRouter} from "./gluggi/GluggiRouter";
import {initSidebarVisibilityToggle} from "./gluggi/sidebar";
import {SidebarContent} from "./gluggi/SidebarContent";
import {initUsagesToggle} from "./gluggi/usages";


let dataContainer = findOne(".gluggi-global-data");

if (dataContainer === null)
{
    throw new Error("Can't run Gluggi, as the global gluggi data is missing.");
}

let data = parseElementAsJson(dataContainer);
let router = new GluggiRouter(data.url);
let contentView = findOne(".gluggi-content-view");

console.log(router.home());
console.log(router.component("test", "abc"));

mount(".gluggi-sidebar", initSidebarVisibilityToggle);
mount(".gluggi-sidebar-content-data", SidebarContent, {type: "jsx", params: {router}});
mount(".gluggi-action-usages", initUsagesToggle);

if (null !== contentView)
{
    mount(".gluggi-toggle-fullscreen", initToggleFullScreen, {params: [contentView]});
}
