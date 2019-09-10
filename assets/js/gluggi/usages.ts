import {on} from "mojave/dom/events";
import {find} from "mojave/dom/traverse";


export function initUsagesToggle (element: HTMLElement) : void
{
    on(find("button.gluggi-action", element), "click", () => {
        element.classList.toggle("is-open");
    });
}
