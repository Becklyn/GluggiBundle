import {JSX, h} from "preact";

/**
 * Returns the icon as SVG
 *
 * @internal
 */
function loadIconSvg (iconName: string): string | null
{
    try
    {
        // @ts-ignore
        // eslint-disable-next-line global-require
        return require(`../../icon/${iconName}.svg`).default || null;
    }
    catch (e)
    {
        // eslint-disable-next-line no-console
        console.error(`Could not find icon '${iconName}'`);
        return null;
    }
}


interface IconProps
{
    name: string;
    title?: string;
}


/**
 * Renders an icon
 */
export function Icon (props: IconProps) : JSX.Element
{
    let svg = loadIconSvg(props.name);

    return <span class="gluggi-icon" dangerouslySetInnerHTML={{__html: svg}} title={props.title} />;
}
