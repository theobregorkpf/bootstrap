---
layout: page
title: Helper classes
---

### Contextual colors

Convey meaning through color with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.

{% example html %}
<p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
{% endexample %}

<div class="bs-callout bs-callout-info">
  <h4>Dealing with specificity</h4>
  <p>Sometimes emphasis classes cannot be applied due to the specificity of another selector. In most cases, a sufficient workaround is to wrap your text in a <code>&lt;span&gt;</code> with the class.</p>
</div>
<div class="bs-callout bs-callout-warning">
  <h4>Conveying meaning to assistive technologies</h4>
  <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (the contextual colors are only used to reinforce meaning that is already present in the text/markup), or is included through alternative means, such as additional text hidden with the <code>.sr-only</code> class.</p>
</div>

### Contextual backgrounds

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes.

{% example html %}
<div class="bg-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
<div class="bg-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</div>
<div class="bg-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</div>
<div class="bg-warning">Etiam porta sem malesuada magna mollis euismod.</div>
<div class="bg-danger">Donec ullamcorper nulla non metus auctor fringilla.</div>
{% endexample %}

<div class="bs-callout bs-callout-info">
  <h4>Dealing with specificity</h4>
  <p>Sometimes contextual background classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a <code>&lt;div&gt;</code> with the class.</p>
</div>

<div class="bs-callout bs-callout-warning">
  <h4>Conveying meaning to assistive technologies</h4>
  <p>As with <a href="#helper-classes-colors">contextual colors</a>, ensure that any meaning conveyed through color is also conveyed in a format that is not purely presentational.</p>
</div>

### Close icon

Use a generic close icon for dismissing content like modals and alerts. **Be sure to include screen reader text when you can** as we've done with `.sr-only`.

{% example html %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  <span class="sr-only">Close</span>
</button>
{% endexample %}

### Quick floats

Float an element to the left or right with a class. `!important` is included to avoid specificity issues. Classes can also be used as mixins.

{% example html %}
<div class="pull-left">Float left</div>
<div class="pull-right">Float right</div>
{% endexample %}

{% highlight scss %}
// Classes
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}

// Usage as mixins
.element {
  @include pull-left;
}
.another-element {
  @include pull-right;
}
{% endhighlight %}

### Center content blocks

Set an element to `display: block;` and center via `margin`. Available as a mixin and class.

{% example html %}
<div class="center-block">Centered block</div>
{% endexample %}

{% highlight scss %}
// Classes
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

// Usage as mixins
.element {
  @include center-block;
}
{% endhighlight %}

Easily clear `float`s by adding `.clearfix` **to the parent element**. Utilizes [the micro clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) as popularized by Nicolas Gallagher. Can also be used as a mixin.

{% highlight html %}
<div class="clearfix">...</div>
{% endhighlight %}

{% highlight scss %}
// Mixin itself
.clearfix() {
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
}

// Usage as a Mixin
.element {
  @include clearfix;
}
{% endhighlight %}

### Hidden content

Hide any HTML element with the `[hidden]` attribute. Previously, v3.x included a `.hidden` class that forced toggled content. However, we removed it due to conflicts with jQuery's `hide()` function. It's taken from [PureCSS](http://purecss.io).

Furthermore, `.invisible` can be used to toggle the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document.

{% highlight html %}
<input type="text" hidden>
{% endhighlight %}

### Invisible content

The `.invisible` class can be used to toggle only the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document.

{% highlight html %}
<div class="invisible">...</div>
{% endhighlight %}

{% highlight scss %}
// Classes
.invisible {
  visibility: hidden;
}

// Usage as mixin
.element {
  .invisible();
}
{% endhighlight %}

### Screen readers and keyboard navigation

Hide an element to all devices **except screen readers** with `.sr-only`. Combine `.sr-only` with `.sr-only-focusable` to show the element again when it's focused (e.g. by a keyboard-only user). Necessary for following [accessibility best practices](../getting-started/#accessibility). Can also be used as mixins.

{% highlight html %}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{% endhighlight %}

{% highlight scss %}
// Usage as a Mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{% endhighlight %}

### Image replacement

Utilize the `.text-hide` class or mixin to help replace an element's text content with a background image.

{% highlight html %}
<h1 class="text-hide">Custom heading</h1>
{% endhighlight %}

{% highlight scss %}
// Usage as a Mixin
.heading {
  @include text-hide;
}
{% endhighlight %}
