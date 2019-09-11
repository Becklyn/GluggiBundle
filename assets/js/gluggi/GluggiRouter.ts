/**
 * A very simple router that mimics the URL structure of the main app
 */
import {Gluggi} from "../@types/gluggi";


export class GluggiRouter
{
    private prefix: string;

    /**
     *
     */
    public constructor (prefix: string)
    {
        this.prefix = prefix;
    }


    /**
     *
     */
    public home ()
    {
        return this.prefix;
    }


    /**
     *
     */
    public component (component: Gluggi.Component) : string
    {
        return `${this.prefix}${component.type}/${component.key}`;
    }
}
