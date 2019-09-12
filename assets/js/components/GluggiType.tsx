import {h, JSX} from "preact";
import {Gluggi} from "../@types/gluggi";
import {ComponentLink} from "./ComponentLink";
import {GluggiRouter} from "../lib/GluggiRouter";


interface GluggiTypeProps
{
    type: Gluggi.Type;
    showFullName?: boolean;
    emptyText?: string;
    router: GluggiRouter;
}

/**
 *
 */
export function GluggiType (props: GluggiTypeProps) : JSX.Element
{
    return (
        <div class="gluggi-component">
            <h2 class="gluggi-component-title">{props.type.title}</h2>
            {props.type.components.length > 0 ? (
                <ul class="gluggi-component-list">
                    {props.type.components.map(component => (
                        <ComponentLink
                            component={component}
                            router={props.router}
                            shortName={!props.showFullName}
                        />
                    ))}
                </ul>
            ) : (
                <div class="gluggi-component-empty">{props.emptyText}</div>
            )}
        </div>
    );
}
