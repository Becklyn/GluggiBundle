/**
 * A very simple router that mimics the URL structure of the main app
 */
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
    public component (type: string, key: string) : string
    {
        return `${this.prefix}${type}/${key}`;
    }
}
