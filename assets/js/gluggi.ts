import {findOne} from "mojave/dom/traverse";
import {parseElementAsJson} from "mojave/json";
import {mount} from "mojave/mount";
import {ComponentUsages} from "./gluggi/ComponentUsages";
import {initToggleFullScreen} from "./gluggi/full-screen";
import {GluggiRouter} from "./gluggi/GluggiRouter";
import {initSidebarVisibilityToggle} from "./gluggi/sidebar";
import {SidebarContent} from "./gluggi/SidebarContent";


let dataContainer = findOne(".gluggi-global-data");

if (dataContainer === null)
{
    throw new Error("Can't run Gluggi, as the global gluggi data is missing.");
}

let data = parseElementAsJson(dataContainer);
let router = new GluggiRouter(data.url);
let contentView = findOne(".gluggi-content-view");

mount(".gluggi-container", initSidebarVisibilityToggle);
mount(".gluggi-sidebar-content-data", SidebarContent, {type: "jsx", params: {router}});
mount(".gluggi-data-container-usages", ComponentUsages, {type: "jsx", params: {router}});

if (null !== contentView)
{
    mount(".gluggi-toggle-fullscreen", initToggleFullScreen, {params: [contentView]});
}
