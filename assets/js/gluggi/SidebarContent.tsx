import {h, JSX, Fragment} from "preact";
import {useState} from "preact/hooks";
// @ts-ignore
import arrowIcon from "../../icon/active.svg";
// @ts-ignore
import searchIcon from "../../icon/search.svg";
// @ts-ignore
import externalIcon from "../../icon/external.svg";
import matchSorter from 'match-sorter'
import {GluggiRouter} from "./GluggiRouter";

interface GluggiComponent
{
    name: string;
    url: string;
    type: string;
    active: boolean;
}

interface GluggiType
{
    title: string;
    components: GluggiComponent[];
}

export interface ComponentListProps
{
    title: string;
    router: GluggiRouter;
    types: GluggiType[];
}


/**
 * Renders a component
 */
function renderComponent (component: GluggiComponent, showFullName: boolean = false) : JSX.Element
{
    return (
        <li>
            <a class={`gluggi-component-link ${component.active ? " gluggi-active" : ""}`} href={component.url}>
                {component.active && (
                    icon(arrowIcon)
                )}
                <span class="gluggi-component-name">
                    {showFullName && (
                        <span class="gluggi-component-type">{component.type}</span>
                    )}
                    {` ${component.name}`}
                    {"page" === component.type ? icon(externalIcon) : ""}
                </span>
            </a>
        </li>
    )
}


/**
 * Renders an icon
 */
function icon (iconSvg : string) : JSX.Element
{
    return <span class="gluggi-icon" dangerouslySetInnerHTML={{__html: iconSvg}} />;
}


interface GluggiTypeProps
{
    type: GluggiType;
    showFullName?: boolean;
    emptyText?: string;
}

function GluggiType (props: GluggiTypeProps) : JSX.Element
{
    return (
        <div class="gluggi-component">
            <h2 class="gluggi-component-title">{props.type.title}</h2>
            {props.type.components.length > 0 ? (
                <ul class="gluggi-component-list">
                    {props.type.components.map(component => renderComponent(component, !!props.showFullName))}
                </ul>
            ) : (
                <div class="gluggi-component-empty">{props.emptyText}</div>
            )}
        </div>
    );
}


/**
 * Renders the complete component list
 */
export function SidebarContent (props: ComponentListProps): JSX.Element
{
    let content = [<div class="gluggi-empty">There are no components.</div>];

    if (props.types.length)
    {
        let [query, setQuery] = useState("");
        let search: GluggiType|null = null;

        if ("" !== query.trim())
        {
            search = {
                title: "Search results",
                components: matchSorter(
                    flattenTypes(props.types),
                    query.trim(),
                    {
                        keys: ["name"],
                    }
                ),
            };
        }

        content = [
            <div class="gluggi-search">
                <label class="gluggi-search-widget">
                    <input
                        type="text"
                        class="gluggi-search-input"
                        id="component-filter"
                        value={query}
                        placeholder="Search..."
                        onInput={e => setQuery((e.currentTarget as HTMLInputElement).value)}
                    />
                    {icon(searchIcon)}
                </label>
            </div>,
            <div class="gluggi-components">
                {search ? (
                    <GluggiType
                        type={search}
                        showFullName={true}
                        emptyText="No matches"
                    />
                ) : (
                    props.types.map(type => <GluggiType type={type} />)
                )}
            </div>
        ];
    }

    return (
        <Fragment>
            <a href={props.router.home()} class="gluggi-title">{props.title}</a>
            {content}
        </Fragment>
    );
}

/**
 * Flattens the types
 */
function flattenTypes (types: GluggiType[]) : GluggiComponent[]
{
    let flattened = [];
    types.forEach(type => type.components.forEach(c => flattened.push(c)));
    return flattened;
}
