import {on} from "mojave/dom/events";
import {toggleClass} from "mojave/dom/manipulate";
import {PersistedToggle} from "../lib/PersistedToggle";


/**
 *
 */
export function initToggleFullScreen (button: HTMLButtonElement, stage: HTMLElement)
{
    let toggle = new PersistedToggle("gluggi:fullscreen");
    toggle
        .init(active => {
            toggleClass(stage, "gluggi-is-fullscreen", active);
            toggleClass(button, "gluggi-is-active", active);
        });

    on(button, "click", () => {
        toggle.toggle();
    });
}
