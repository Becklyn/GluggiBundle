import {on} from "mojave/dom/events";
import {createUnstyledElement, prepend} from "mojave/dom/manipulate";
import {findOne} from "mojave/dom/traverse";

// @ts-ignore
import closeIcon from "../../icon/close.svg";
// @ts-ignore
import menuIcon from "../../icon/menu.svg";


/**
 * Initializes the close button
 */
export function initSidebarVisibilityToggle (container: HTMLElement)
{
    if (findOne(".gluggi-sidebar", container) === null)
    {
        return;
    }

    let button = createUnstyledElement("button", {
        class: "gluggi-sidebar-toggle",
        html: `<span class="gluggi-icon-menu">${menuIcon}</span><span class="gluggi-icon-close">${closeIcon}</span>`,
    });

    prepend(container, button);
    let classes = container.classList;
    let opened = "open" === window.localStorage.getItem("gluggi:sidebar");

    let open = () => {
        classes.add("gluggi-is-open");
        opened = true;
        window.localStorage.setItem("gluggi:sidebar", "open");
    };

    let close = () => {
        classes.remove("gluggi-is-open");
        opened = false;
        window.localStorage.removeItem("gluggi:sidebar");
    };

    on(button, "click", () => {
        (opened ? close : open)();
    });

    // if initially opened -> open
    if (opened)
    {
        open();
    }
}
