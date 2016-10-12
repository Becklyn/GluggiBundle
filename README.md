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



Configuration
-------------

You can define several config values in your `app/config.yml`:


| Key   | Type       | Required | Description |
| ----- | ---------- | -------- | ----------- |
| `css` | `string[]` | no       | The CSS files that will automatically be loaded. All paths are relative to `LayoutBundle/Resources/public/css`. |
| `js`  | `string[]` | no       | The JavaScript files that will automatically be loaded. All paths are relative to `LayoutBundle/Resources/public/js`. |


### Default configuration

```yml
gluggi:
    css:
        - "app.css"
    js: 
        - "app.js"
```


Usage
-----

Create a `LayoutBundle` and load it in your `AppKernel`.

You can add your views in `LayoutBundle/Resources/views/{atom,molecule,organism,template,page}`.
