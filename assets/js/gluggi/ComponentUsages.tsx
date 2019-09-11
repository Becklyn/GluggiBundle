import {h, JSX} from "preact";
import {useState} from "preact/hooks";
import {Gluggi} from "../@types/gluggi";
import {ComponentLink} from "./ComponentLink";
import {GluggiRouter} from "./GluggiRouter";
import {icon} from "./icon";

// @ts-ignore
import chevronIcon from "../../icon/chevron.svg";
// @ts-ignore
import transitiveIcon from "../../icon/transitive.svg";


export interface ComponentUsagesProps
{
    uses: Gluggi.Dependencies;
    usedBy: Gluggi.Dependencies;
    router: GluggiRouter;
}

function renderList (dependencies: Gluggi.Dependencies, showTransitive: boolean, router: GluggiRouter) : JSX.Element
{
    if (!dependencies.direct.length && (!showTransitive || !dependencies.transitive.length))
    {
        return <div class="gluggi-dependencies-empty">—</div>;
    }

    return (
        <ul>
            {dependencies.direct.map(component => (
                <li>
                    <ComponentLink component={component} router={router} />
                </li>
            ))}
            {showTransitive && dependencies.transitive.map(component => (
                <li>
                    <ComponentLink component={component} router={router}>
                        {icon(transitiveIcon, "transitive dependency")}
                    </ComponentLink>
                </li>
            ))}
        </ul>
    )
}


export function ComponentUsages (props: ComponentUsagesProps): JSX.Element
{
    let [open, setOpen] = useState(false);
    let [transitive, setTransitive] = useState(false);
    let hasTransitiveDependencies = (props.uses.transitive.length + props.usedBy.transitive.length) > 0;

    return (
        <div class={`gluggi-action-usages ${open ? "is-open" : ""}`}>
            <button type="button" class="gluggi-action" onClick={() => setOpen(!open)}>
                {icon(chevronIcon)} Usages
            </button>
            {open && (
                <div class="gluggi-usages-overview">
                    {hasTransitiveDependencies && (
                        <button type="button" class="gluggi-usages-transitive-toggle" onClick={() => setTransitive(!transitive)}>
                            {icon(transitiveIcon)}
                            {transitive ? "hide transitive" : "show transitive"}
                        </button>
                    )}
                    <div class="gluggi-usages-list">
                        <h3>Uses</h3>
                        {renderList(props.uses, transitive, props.router)}
                    </div>

                    <div class="gluggi-usages-list">
                        <h3>Used by</h3>
                        {renderList(props.usedBy, transitive, props.router)}
                    </div>
                </div>
            )}
        </div>
    );
}
