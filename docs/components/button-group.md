---
layout: page
title: Button group
---

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with [our buttons plugin](../javascript/#buttons).

<div class="bs-callout bs-callout-warning">
  <h4>Tooltips &amp; popovers in button groups require special setting</h4>
  <p>When using tooltips or popovers on elements within a <code>.btn-group</code>, you'll have to specify the option <code>container: 'body'</code> to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip or popover is triggered).</p>
</div>

<div class="bs-callout bs-callout-warning">
  <h4>Ensure correct <code>role</code> and provide a label</h4>
  <p>In order for assistive technologies – such as screen readers – to convey that a series of buttons is grouped, an appropriate <code>role</code> attribute needs to be provided. For button groups, this would be <code>role="group"</code>, while toolbars should have a <code>role="toolbar"</code>.</p>
  <p>One exception are groups which only contain a single control (for instance the <a href="#btn-groups-justified">justified button groups</a> with <code>&lt;button&gt;</code> elements) or a dropdown.</p>
  <p>In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct <code>role</code> attribute. In the examples provided here, we use <code>aria-label</code>, but alternatives such as <code>aria-labelledby</code> can also be used.</p>
</div>

### Basic example

Wrap a series of buttons with `.btn` in `.btn-group`.

{% example html %}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
{% endexample %}

### Button toolbar

Combine sets of button groups into button toolbars for more complex components.

{% example html %}
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-secondary">4</button>
  </div>
  <div class="btn-group" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-secondary">8</button>
  </div>
</div>
{% endexample %}

### Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to the `.btn-group`.

<div class="bs-example">
  <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>
  <br>
  <div class="btn-group" role="group" aria-label="Default button group">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>
  <br>
  <div class="btn-group btn-group-xs" role="group" aria-label="Extra small button group">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>
</div>

{% highlight html %}
<div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
<div class="btn-group" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-sm" role="group" aria-label="...">...</div>
<div class="btn-group btn-group-xs" role="group" aria-label="...">...</div>
{% endhighlight %}

### Nesting

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons.

{% example html %}
<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-secondary">1</button>
  <button type="button" class="btn btn-secondary">2</button>

  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="btnGroupDrop1">
      <li><a href="#">Dropdown link</a></li>
      <li><a href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
{% endexample %}

### Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

<div class="bs-example">
  <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" class="btn btn-secondary">Button</button>
    <button type="button" class="btn btn-secondary">Button</button>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop1">
        <li><a href="#">Dropdown link</a></li>
        <li><a href="#">Dropdown link</a></li>
      </ul>
    </div>
    <button type="button" class="btn btn-secondary">Button</button>
    <button type="button" class="btn btn-secondary">Button</button>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop2" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop2">
        <li><a href="#">Dropdown link</a></li>
        <li><a href="#">Dropdown link</a></li>
      </ul>
    </div>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop3" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop3">
        <li><a href="#">Dropdown link</a></li>
        <li><a href="#">Dropdown link</a></li>
      </ul>
    </div>
    <div class="btn-group" role="group">
      <button id="btnGroupVerticalDrop4" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul class="dropdown-menu" role="menu" aria-labelledby="btnGroupVerticalDrop4">
        <li><a href="#">Dropdown link</a></li>
        <li><a href="#">Dropdown link</a></li>
      </ul>
    </div>
  </div>
</div>

{% highlight html %}
<div class="btn-group-vertical">
  ...
</div>
{% endhighlight %}

### Justified button groups

Make a group of buttons stretch at equal sizes to span the entire width of its parent. Also works with button dropdowns within the button group.

<div class="bs-callout bs-callout-warning">
  <h4>Handling borders</h4>
  <p>Due to the specific HTML and CSS used to justify buttons (namely <code>display: table-cell</code>), the borders between them are doubled. In regular button groups, <code>margin-left: -1px</code> is used to stack the borders instead of removing them. However, <code>margin</code> doesn't work with <code>display: table-cell</code>. As a result, depending on your customizations to Bootstrap, you may wish to remove or re-color the borders.</p>
</div>

#### With `<a>` elements

Just wrap a series of `.btn`s in `.btn-group.btn-group-justified`.

{% example html %}
<div class="bs-example">
  <div class="btn-group btn-group-justified" role="group" aria-label="Justified button group">
    <a class="btn btn-secondary" href="#" role="button">Left</a>
    <a class="btn btn-secondary" href="#" role="button">Middle</a>
    <a class="btn btn-secondary" href="#" role="button">Right</a>
  </div>
  <br>
  <div class="btn-group btn-group-justified" role="group" aria-label="Justified button group with nested dropdown">
    <a class="btn btn-secondary" href="#" role="button">Left</a>
    <a class="btn btn-secondary" href="#" role="button">Middle</a>
    <div class="btn-group" role="group">
      <a class="btn btn-secondary dropdown-toggle" href="#" data-toggle="dropdown"role="button" aria-expanded="false">
        Dropdown
      </a>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}

<div class="bs-callout bs-callout-warning">
  <h4>Links acting as buttons</h4>
  <p>If the <code>&lt;a&gt;</code> elements are used to act as buttons – triggering in-page functionality, rather than navigating to another document or section within the current page – they should also be given an appropriate <code>role="button"</code>.</p>
</div>

#### With `<button>` elements

To use justified button groups with `<button>` elements, **you must wrap each button in a button group**. Most browsers don't properly apply our CSS for justification to `<button>` elements, but since we support button dropdowns, we can work around that.

{% example html %}
<div class="bs-example">
  <div class="btn-group btn-group-justified" role="group" aria-label="Justified button group">
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-secondary">Left</button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-secondary">Middle</button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-secondary">Right</button>
    </div>
  </div>
</div>
{% endexample %}
