import {on} from "mojave/dom/events";
import {createUnstyledElement, prepend, toggleClass} from "mojave/dom/manipulate";
import {findOne} from "mojave/dom/traverse";

// @ts-ignore
import closeIcon from "../../icon/close.svg";
// @ts-ignore
import menuIcon from "../../icon/menu.svg";
import {PersistedToggle} from "../lib/PersistedToggle";


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

    let toggle = new PersistedToggle("gluggi:sidebar");
    toggle
        .init(active => toggleClass(container, "gluggi-is-open", active));

    on(button, "click", () => toggle.toggle());
}
