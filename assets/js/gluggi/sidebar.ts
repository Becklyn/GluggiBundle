import {on} from "mojave/dom/events";
import {createUnstyledElement, prepend} from "mojave/dom/manipulate";
// @ts-ignore
import closeIcon from "../../icon/close.svg";
// @ts-ignore
import menuIcon from "../../icon/menu.svg";

/**
 * Initializes the close button
 */
export function initSidebarVisibilityToggle (sidebar: HTMLElement)
{
    let close = createUnstyledElement("button", {
        class: "gluggi-sidebar-close",
        html: closeIcon,
    });
    let open = createUnstyledElement("button", {
        class: "gluggi-sidebar-open",
        html: menuIcon,
    });
    prepend(sidebar, close);
    prepend(sidebar.parentElement, open);
    let visible = true;

    on(close, "click", () => {
        sidebar.classList.add("is-hidden");
        open.classList.add("is-visible");
        visible = false;
    });

    on(open, "click", () => {
        sidebar.classList.remove("is-hidden");
        open.classList.remove("is-visible");
        visible = true;
    });
}
