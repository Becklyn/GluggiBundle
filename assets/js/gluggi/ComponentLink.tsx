import {h, JSX, RenderableProps} from "preact";
import {Gluggi} from "../@types/gluggi";
import {GluggiRouter} from "./GluggiRouter";
import {icon} from "./icon";

// @ts-ignore
import arrowIcon from "../../icon/active.svg";
// @ts-ignore
import externalIcon from "../../icon/external.svg";


export interface ComponentLinkProps
{
    component: Gluggi.Component;
    router: GluggiRouter;
    shortName?: boolean;
    active?: boolean;
}


export function ComponentLink (props: RenderableProps<ComponentLinkProps>): JSX.Element
{
    let component = props.component;
    let isActive = true === props.active;

    return (
        <a class={`gluggi-component-link ${isActive ? " gluggi-active" : ""}`} href={props.router.component(component)}>
            {isActive && (
                icon(arrowIcon)
            )}
            <span class="gluggi-component-name">
                    {(true !== props.shortName) && (
                        <span class="gluggi-component-type">{component.type}</span>
                    )}
                {` ${component.name}`}
                {props.children}
                {"page" === component.type ? icon(externalIcon, "isolated view") : ""}
                </span>
        </a>
    );
}
