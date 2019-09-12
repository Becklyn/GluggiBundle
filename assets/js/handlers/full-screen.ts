import {on} from "mojave/dom/events";
import {toggleClass} from "mojave/dom/manipulate";


/**
 *
 */
export function initToggleFullScreen (button: HTMLButtonElement, stage: HTMLElement)
{
    let fullscreen = false;

    on(button, "click", () => {
        fullscreen = !fullscreen;
        toggleClass(stage, "gluggi-is-fullscreen", fullscreen);
        toggleClass(button, "gluggi-is-active", fullscreen);
    });
}
