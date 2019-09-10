import {findOne} from "mojave/dom/traverse";
import {mount} from "mojave/mount";
import {initToggleFullScreen} from "./gluggi/full-screen";
import {initSidebarVisibilityToggle} from "./gluggi/sidebar";
import {SidebarContent} from "./gluggi/SidebarContent";
import {initUsagesToggle} from "./gluggi/usages";


let contentView = findOne(".gluggi-content-view");

mount(".gluggi-sidebar", initSidebarVisibilityToggle);
mount(".gluggi-sidebar-content-data", SidebarContent, {type: "jsx"});
mount(".gluggi-action-usages", initUsagesToggle);

if (null !== contentView)
{
    mount(".gluggi-toggle-fullscreen", initToggleFullScreen, {params: [contentView]});
}
