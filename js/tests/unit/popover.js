$(function () {
  'use strict';

  module('popover plugin')

  test('should be defined on jquery object', function (assert) {
    assert.ok($(document.body).popover, 'popover method is defined')
  })

  module('popover', {
    setup: function () {
      // Run all tests in noConflict mode -- it's the only way to ensure that the plugin works in noConflict mode
      $.fn.bootstrapPopover = $.fn.popover.noConflict()
    },
    teardown: function () {
      $.fn.popover = $.fn.bootstrapPopover
      delete $.fn.bootstrapPopover
    }
  })

  test('should provide no conflict', function (assert) {
    assert.strictEqual($.fn.popover, undefined, 'popover was set back to undefined (org value)')
  })

  test('should return jquery collection containing the element', function (assert) {
    var $el = $('<div/>')
    var $popover = $el.bootstrapPopover()
    assert.ok($popover instanceof $, 'returns jquery collection')
    assert.strictEqual($popover[0], $el[0], 'collection contains element')
  })

  test('should render popover element', function (assert) {
    var $popover = $('<a href="#" title="mdo" data-content="https://twitter.com/mdo">@mdo</a>')
      .appendTo('#qunit-fixture')
      .bootstrapPopover('show')

    assert.notEqual($('.popover').length, 0, 'popover was inserted')
    $popover.bootstrapPopover('hide')
    assert.equal($('.popover').length, 0, 'popover removed')
  })

  test('should store popover instance in popover data object', function (assert) {
    var $popover = $('<a href="#" title="mdo" data-content="https://twitter.com/mdo">@mdo</a>').bootstrapPopover()

    assert.ok($popover.data('bs.popover'), 'popover instance exists')
  })

  test('should store popover trigger in popover instance data object', function (assert) {
    var $popover = $('<a href="#" title="ResentedHook">@ResentedHook</a>')
      .appendTo('#qunit-fixture')
      .bootstrapPopover()

    $popover.bootstrapPopover('show')

    assert.ok($('.popover').data('bs.popover'), 'popover trigger stored in instance data')
  })

  test('should get title and content from options', function (assert) {
    var $popover = $('<a href="#">@fat</a>')
      .appendTo('#qunit-fixture')
      .bootstrapPopover({
        title: function () {
          return '@fat'
        },
        content: function () {
          return 'loves writing tests （╯°□°）╯︵ ┻━┻'
        }
      })

    $popover.bootstrapPopover('show')

    assert.notEqual($('.popover').length, 0, 'popover was inserted')
    assert.equal($('.popover .popover-title').text(), '@fat', 'title correctly inserted')
    assert.equal($('.popover .popover-content').text(), 'loves writing tests （╯°□°）╯︵ ┻━┻', 'content correctly inserted')

    $popover.bootstrapPopover('hide')
    assert.equal($('.popover').length, 0, 'popover was removed')
  })

  test('should not duplicate HTML object', function (assert) {
    var $div = $('<div/>').html('loves writing tests （╯°□°）╯︵ ┻━┻')

    var $popover = $('<a href="#">@fat</a>')
      .appendTo('#qunit-fixture')
      .bootstrapPopover({
        content: function () {
          return $div
        }
      })

    $popover.bootstrapPopover('show')
    assert.notEqual($('.popover').length, 0, 'popover was inserted')
    assert.equal($('.popover .popover-content').html(), $div, 'content correctly inserted')

    $popover.bootstrapPopover('hide')
    assert.equal($('.popover').length, 0, 'popover was removed')

    $popover.bootstrapPopover('show')
    assert.notEqual($('.popover').length, 0, 'popover was inserted')
    assert.equal($('.popover .popover-content').html(), $div, 'content correctly inserted')

    $popover.bootstrapPopover('hide')
    assert.equal($('.popover').length, 0, 'popover was removed')
  })

  test('should get title and content from attributes', function (assert) {
    var $popover = $('<a href="#" title="@mdo" data-content="loves data attributes (づ｡◕‿‿◕｡)づ ︵ ┻━┻" >@mdo</a>')
      .appendTo('#qunit-fixture')
      .bootstrapPopover()
      .bootstrapPopover('show')

    assert.notEqual($('.popover').length, 0, 'popover was inserted')
    assert.equal($('.popover .popover-title').text(), '@mdo', 'title correctly inserted')
    assert.equal($('.popover .popover-content').text(), 'loves data attributes (づ｡◕‿‿◕｡)づ ︵ ┻━┻', 'content correctly inserted')

    $popover.bootstrapPopover('hide')
    assert.equal($('.popover').length, 0, 'popover was removed')
  })


  test('should get title and content from attributes ignoring options passed via js', function (assert) {
    var $popover = $('<a href="#" title="@mdo" data-content="loves data attributes (づ｡◕‿‿◕｡)づ ︵ ┻━┻" >@mdo</a>')
      .appendTo('#qunit-fixture')
      .bootstrapPopover({
        title: 'ignored title option',
        content: 'ignored content option'
      })
      .bootstrapPopover('show')

    assert.notEqual($('.popover').length, 0, 'popover was inserted')
    assert.equal($('.popover .popover-title').text(), '@mdo', 'title correctly inserted')
    assert.equal($('.popover .popover-content').text(), 'loves data attributes (づ｡◕‿‿◕｡)づ ︵ ┻━┻', 'content correctly inserted')

    $popover.bootstrapPopover('hide')
    assert.equal($('.popover').length, 0, 'popover was removed')
  })

  test('should respect custom template', function (assert) {
    var $popover = $('<a href="#">@fat</a>')
      .appendTo('#qunit-fixture')
      .bootstrapPopover({
        title: 'Test',
        content: 'Test',
        template: '<div class="popover foobar"><div class="arrow"></div><div class="inner"><h3 class="title"/><div class="content"><p/></div></div></div>'
      })

    $popover.bootstrapPopover('show')

    assert.notEqual($('.popover').length, 0, 'popover was inserted')
    assert.ok($('.popover').hasClass('foobar'), 'custom class is present')

    $popover.bootstrapPopover('hide')
    assert.equal($('.popover').length, 0, 'popover was removed')
  })

  test('should destroy popover', function (assert) {
    var $popover = $('<div/>')
      .bootstrapPopover({
        trigger: 'hover'
      })
      .on('click.foo', $.noop)

    assert.ok($popover.data('bs.popover'), 'popover has data')
    assert.ok($._data($popover[0], 'events').mouseover && $._data($popover[0], 'events').mouseout, 'popover has hover event')
    assert.equal($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover has extra click.foo event')

    $popover.bootstrapPopover('show')
    $popover.bootstrapPopover('destroy')

    assert.ok(!$popover.hasClass('in'), 'popover is hidden')
    assert.ok(!$popover.data('popover'), 'popover does not have data')
    assert.equal($._data($popover[0], 'events').click[0].namespace, 'foo', 'popover still has click.foo')
    assert.ok(!$._data($popover[0], 'events').mouseover && !$._data($popover[0], 'events').mouseout, 'popover does not have any events')
  })

  test('should render popover element using delegated selector', function (assert) {
    var $div = $('<div><a href="#" title="mdo" data-content="http://twitter.com/mdo">@mdo</a></div>')
      .appendTo('#qunit-fixture')
      .bootstrapPopover({
        selector: 'a',
        trigger: 'click'
      })

    $div.find('a').click()
    assert.notEqual($('.popover').length, 0, 'popover was inserted')

    $div.find('a').click()
    assert.equal($('.popover').length, 0, 'popover was removed')
  })

  test('should detach popover content rather than removing it so that event handlers are left intact', function (assert) {
    var $content = $('<div class="content-with-handler"><a class="btn btn-warning">Button with event handler</a></div>').appendTo('#qunit-fixture')

    var handlerCalled = false
    $('.content-with-handler .btn').click(function () {
      handlerCalled = true
    })

    var $div = $('<div><a href="#">Show popover</a></div>')
      .appendTo('#qunit-fixture')
      .bootstrapPopover({
        html: true,
        trigger: 'manual',
        container: 'body',
        content: function () {
          return $content
        }
      })

    var done = assert.async()
    $div
      .one('shown.bs.popover', function () {
        $div
          .one('hidden.bs.popover', function () {
            $div
              .one('shown.bs.popover', function () {
                $('.content-with-handler .btn').click()
                $div.bootstrapPopover('destroy')
                assert.ok(handlerCalled, 'content\'s event handler still present')
                done()
              })
              .bootstrapPopover('show')
          })
          .bootstrapPopover('hide')
      })
      .bootstrapPopover('show')
  })

  test('should throw an error when initializing popover on the document object without specifying a delegation selector', function (assert) {
    assert.throws(function () {
      $(document).bootstrapPopover({ title: 'What am I on?', content: 'My selector is missing' })
    }, new Error('`selector` option must be specified when initializing popover on the window.document object!'))
  })

})
