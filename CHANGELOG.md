3.5.0
=====

*   (feature) Add support for PHP 8.
*   (internal) Fix Symfony deprecations.
*   (improvement) Add missing property types and return types.
*   (internal) Remove support for Symfony 4.4.
*   (improvement) Add support for Symfony 6.


3.4.0
=====

*   (feature) Add `variants.html.twig` template for automatic rendering of all permutations of a component.


3.3.0
=====

*   (improvement) Bump minimum PHP version to ^7.4.
*   (improvement) Upgrade to `becklyn/rad`.
*   (bug) Add support for both the new and old RAD bundles in `gluggy_dummy()`.


3.2.2
=====

*   (improvement) Fix wrong choice labels 


3.2.1
=====

*   (bug) If a component references itself within a `standalone` check the dependency calculation does not longer fail. 


3.2.0
=====

*   (feature) Implement new layout.
*   (feature) Added `gluggi_dummy()` for dummy content. Currently supported is only `gluggi_dummy("content")`.
*   (improvement) Allow Symfony 5.
*   (internal) Update package infrastructure.
*   (internal) Move all files to `src/`.
*   (feature) Add "usages" + "used in"
*   (feature) Also support transitive dependencies
*   (feature) Add welcome screen
*   (improvement) Make layout responsive.
*   (improvement) Store state of sidebar.
*   (feature) Add support for dummy content: 'form'
