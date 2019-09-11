import {JSX, h} from "preact";


/**
 * Renders an icon
 */
export function icon (iconSvg : string, title?: string) : JSX.Element
{
    return <span class="gluggi-icon" dangerouslySetInnerHTML={{__html: iconSvg}} title={title} />;
}
