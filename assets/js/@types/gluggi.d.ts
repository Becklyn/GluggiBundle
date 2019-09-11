export module Gluggi
{
    export interface Component
    {
        type: string;
        key: string;
        name: string;
        hidden: boolean;
    }

    export interface Dependencies
    {
        direct: Component[];
        transitive: Component[];
    }
}
