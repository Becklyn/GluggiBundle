import {findOne} from "mojave/dom/traverse";
import {parseElementAsJson} from "mojave/json";
import {mount} from "mojave/mount";
import {ComponentReferences} from "./components/ComponentReferences";
import {initToggleFullScreen} from "./handlers/full-screen";
import {GluggiRouter} from "./lib/GluggiRouter";
import {initSidebarVisibilityToggle} from "./handlers/sidebar";
import {SidebarContent} from "./components/SidebarContent";

// prepare variables
let data = parseElementAsJson(document.getElementById("gluggi-global-data"));
let router = new GluggiRouter(data.url);
let stage = findOne(".gluggi-stage");

// mount components
mount(".gluggi-container", initSidebarVisibilityToggle);
mount("#gluggi-sidebar-content-data", SidebarContent, {
    type: "jsx",
    params: {router},
});
mount("#gluggi-data-container-references", ComponentReferences, {
    type: "jsx",
    params: {router},
});

if (null !== stage)
{
    mount(".gluggi-toggle-fullscreen", initToggleFullScreen, {params: [stage]});
}
