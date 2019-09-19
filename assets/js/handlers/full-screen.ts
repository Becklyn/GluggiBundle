import {on} from "mojave/dom/events";
import {toggleClass} from "mojave/dom/manipulate";
import {persistedToggle} from "../lib/PersistedToggle";


/**
 *
 */
export function initToggleFullScreen (button: HTMLButtonElement, stage: HTMLElement)
{
    let toggle = persistedToggle(
        "gluggi:fullscreen",
        active => {
            toggleClass(stage, "gluggi-is-fullscreen", active);
            toggleClass(button, "gluggi-is-active", active);
        }
    );

    on(button, "click", toggle);
}
