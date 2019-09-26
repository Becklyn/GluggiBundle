export module Gluggi
{
    export interface Component
    {
        key: string;
        type: string;
        name: string;
        hidden: boolean;
        error: string|null;
        active: boolean;
    }

    export interface Type
    {
        title: string;
        components: Component[];
    }

    export interface Dependencies
    {
        direct: Component[];
        transitive: Component[];
    }
}
