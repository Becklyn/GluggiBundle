import {h, JSX, RenderableProps} from "preact";
import {Gluggi} from "../@types/gluggi";
import {GluggiRouter} from "../lib/GluggiRouter";
import {Icon} from "./Icon";


export interface ComponentLinkProps
{
    component: Gluggi.Component;
    router: GluggiRouter;
    shortName?: boolean;
    active?: boolean;
}

/**
 *
 */
export function ComponentLink (props: RenderableProps<ComponentLinkProps>): JSX.Element
{
    let component = props.component;

    return (
        <a class={`gluggi-component-link ${props.component.active ? " gluggi-active" : ""}`} href={props.router.component(component)}>
            {props.component.active && (
                <Icon name="active" />
            )}
            <span class="gluggi-component-name">
                {(true !== props.shortName) && (
                    <span class="gluggi-component-type">{component.type}</span>
                )}
                {` ${component.name}`}
                {props.children}
                {"page" === component.type ? <Icon name="external" title="isolated view" /> : ""}
            </span>
        </a>
    );
}
