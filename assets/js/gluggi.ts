import {mount} from "mojave/mount";
import {initSidebarVisibilityToggle} from "./gluggi/sidebar";
import {SidebarContent} from "./gluggi/SidebarContent";


mount(".gluggi-sidebar", initSidebarVisibilityToggle);
mount(".gluggi-sidebar-content-data", SidebarContent, {type: "jsx"});
