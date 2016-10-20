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
        resource: "@GluggiBundle/Resources/config/routing.yml"
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


### Including views in other views
Especially in views that include other subviews it is preferable to just import these subviews, instead of copy & pasting them through the layout project.

Gluggi contains a simple twig function that includes a component:

```jinja
<div class="wrapper">
    {{ gluggi("atom", "example")
</div>
```

The function has three parameters: `gluggi(type, name [, templateContext])`

| Argument          | Type               | Description                                                   |
| ----------------- | ------------------ | ------------------------------------------------------------- |
| `type`            | `string`           | the type of the component, like `"atom"`, `"molecule"`, etc.. |
| `name`            | `string`           | the name of the component (the filename with extension)       |
| `templateContext` | `array` (optional) | the variables that are available in the templates             |



### Template variables
Components can use variables (just like any other Twig template).
All templates need to work standalone, so the value of the variable must be defined in the template via `{% set variable = ... %}`.

To allow overwriting certain values, the [`|default(...)` filter from Twig](http://twig.sensiolabs.org/doc/filters/default.html) can be used. If the component is included in another template, the variables can be changed.


`atom/list.html.twig`:
```jinja
<ul>
    {% for i in 1 .. entries|default(3) %}
    <li>Entry #{{ i }}</li>
    {% endfor %}
</ul>
```

`molecule/long-list.html.twig`:
```jinja
<div class="long-list">
    {{ gluggi("atom", "list", {entries: 10}) }
</div>
```


### Predefined template variables

This is list of predefined variables:

| Name         | Type   | Description                                                                                                                                             |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `standalone` | `bool` | Defines, whether the component is previewed standalone or embedded in another component. Defaults to `false` in any `gluggi()` embed, `true` otherwise. |



You can overwrite predefined values in included templates, by passing an explicit value as template parameter:
```jinja
{{ gluggi("atom", "example", {standalone: true}) }}
```


#### `standalone`
The purpose of this variable is to provide an indicator whether the component is previewed in isolation or embedded in another template.
This is for example important if a component receives its actual width from the parent.


`atom/example.html.twig`:
```jinja
{% if standalone %}<div style="width: 800px;">{% endif %}

    <div class="example">
        {# ... #}
    </div>
    
{% if standalone %}</div>{% endif %}
```

`molecule/product.html.twig`:
```jinja
{# here the width is defined on the product, so the helper <div> shouldn't be in the output #}
<div class="product">
    {{ gluggi("atom", "example") }} {# includes with standalone = false by default #}
</div>
```

### Using assets in views

#### CSS assets
Place your images under `Resources/public/img` (just as in any other Symfony bundle) and reference the image in your SCSS file via `url("../img/...")`.

#### Inline assets
Load the assets directly from the bundle via Symfony's own `asset()` function:

```jinja
<!-- Resources/views/atom/example.html.twig -->

<div class="example">
    <img src="{{ asset("bundles/layout/img/example.jpg") }}" alt="Example Image">
</div>
```


#### Separating content and layout assets
In a regular layout project, there are some assets that are required for the layout to function (like logos, background images, etc...). And there are content images, that act
as placeholders in the layout previews.

It is recommended to separate the two images into two directories:

* `Resources/public/img` for layout assets
* `Resources/public/content` for content placeholder assets
