import {h, JSX, Fragment} from "preact";
import {useState} from "preact/hooks";
import matchSorter from 'match-sorter'
import {Gluggi} from "../@types/gluggi";
import {GluggiRouter} from "../lib/GluggiRouter";
import {GluggiType} from "./GluggiType";
import {Icon} from "./Icon";


export interface SidebarContentProps
{
    title: string;
    router: GluggiRouter;
    types: Gluggi.Type[];
}


/**
 * Renders the complete component list
 */
export function SidebarContent (props: SidebarContentProps): JSX.Element
{
    let content = [<div class="gluggi-empty">There are no components.</div>];

    if (props.types.length)
    {
        let [query, setQuery] = useState("");
        let search: Gluggi.Type|null = null;

        if ("" !== query.trim())
        {
            search = {
                title: "Search results",
                components: matchSorter(
                    flattenTypes(props.types),
                    query.trim(),
                    {
                        keys: ["name", "type"],
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
                    <Icon name="search" />
                </label>
            </div>,
            <div class="gluggi-components">
                {search ? (
                    <GluggiType
                        type={search}
                        showFullName={true}
                        emptyText="No matches"
                        router={props.router}
                    />
                ) : (
                    props.types.map(type => <GluggiType type={type} router={props.router} />)
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
function flattenTypes (types: Gluggi.Type[]) : Gluggi.Component[]
{
    let flattened = [];
    types.forEach(type => type.components.forEach(c => flattened.push(c)));
    return flattened;
}
