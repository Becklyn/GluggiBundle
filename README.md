Gluggi
======

Modular layout system



Installation
------------

1. First install the bundle via composer: 

    ```bash
    composer require becklyn/gluggi-bundle
    ```
    
2. Load the bundle in your `AppKernel`
3. Load the routing in your `routing.yml` or `routing_dev.yml`:

    ```yml
    layout:
        resource: "@BecklynGluggiBundle/Resources/config/routing.yml"
        prefix: /_layout/
    ```


Usage
-----

Create a `LayoutBundle` and load it in your `AppKernel`.

You can add your views in `LayoutBundle/Resources/views/{atom,molecule,organism,template,page}`.
