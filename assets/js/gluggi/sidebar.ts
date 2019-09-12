import {on} from "mojave/dom/events";
import {createUnstyledElement, prepend, toggleClass} from "mojave/dom/manipulate";
// @ts-ignore
import closeIcon from "../../icon/close.svg";
// @ts-ignore
import menuIcon from "../../icon/menu.svg";

/**
 * Initializes the close button
 */
export function initSidebarVisibilityToggle (container: HTMLElement)
{
    let button = createUnstyledElement("button", {
        class: "gluggi-sidebar-toggle",
        html: `<span class="gluggi-default">${menuIcon}</span><span class="gluggi-toggled">${closeIcon}</span>`,
    });

    let isToggled = false;
    prepend(container, button);

    on(button, "click", () => {
        isToggled = !isToggled;
        toggleClass(container, "gluggi-is-toggled", isToggled);
    });
}
