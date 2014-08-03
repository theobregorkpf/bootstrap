---
layout: default
title: Wall of browser bugs
---

Bootstrap currently works around several outstanding browser bugs in major browsers to deliver the best cross-browser experience possible. Some bugs, like those listed below, cannot be solved by us.

We publicly list browser bugs that are impacting us here, in the hopes of expediting the process of fixing them. For information on Bootstrap's browser compatibility, [see our browser compatibility docs](../getting-started/#support).

<div class="table-responsive">
  <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <th>Browser(s)</th>
        <th>Summary of bug</th>
        <th>Upstream bug(s)</th>
        <th>Bootstrap issue(s)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Firefox</td>
        <td><code>.table-bordered</code> with an empty <code>&lt;tbody&gt;</code> is missing borders</td>
        <td><a href="{{ site.bug.firefox }}1023761">Mozilla bug #1023761</a></td>
        <td><a href="{{ site.bug.github }}13453">#13453</a></td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>Unusual default form control styles on Android</td>
        <td><a href="{{ site.bug.firefox }}900871">Closed Mozilla bug #900871</a>, <a href="{{ site.bug.firefox }}763671">Open Mozilla bug #763671</a></td>
        <td><a href="{{ site.bug.github }}8702">#8702</a></td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td><code>max-width: 100%;</code> doesn't work inside tables</td>
        <td><a href="{{ site.bug.firefox }}975632">Mozilla bug #975632</a></td>
        <td><a href="{{ site.bug.github }}10690">#10690</a></td>
      </tr>
      <tr>
        <td>Chrome</td>
        <td>Weird button behavior with some number <code>&lt;input&gt;</code>s</td>
        <td><a href="{{ site.bug.chrome }}337668">Chromium issue #337668</a></td>
        <td><a href="{{ site.bug.github }}8350">#8350</a>, <a href="https://github.com/necolas/normalize.css/issues/283">Normalize #283</a></td>
      </tr>
      <tr>
        <td>Chrome</td>
        <td><code>display: table;</code> within <code>display: block;</code> forces sibling content to new line</td>
        <td><a href="{{ site.bug.chrome }}309483">Chromium issue #309483</a></td>
        <td><a href="{{ site.bug.github }}9950">#9950</a></td>
      </tr>
      <tr>
        <td>Chrome</td>
        <td>Unwanted vertical lines when printing styled <code>&lt;select&gt;</code> on OS X</td>
        <td><a href="{{ site.bug.chrome }}282918">Chromium issue #282918</a></td>
        <td><a href="{{ site.bug.github }}11245">#11245</a></td>
      </tr>
      <tr>
        <td>Chrome</td>
        <td>inline-block element collapses white-space on Windows</td>
        <td><a href="{{ site.bug.chrome }}329574">Chromium issue #329574</a></td>
        <td><a href="{{ site.bug.github }}11885">#11885</a></td>
      </tr>
      <tr>
        <td>Chrome</td>
        <td>Incorrect viewport size used for media queries when printing</td>
        <td><a href="{{ site.bug.chrome }}273306">Chromium issue #273306</a></td>
        <td><a href="{{ site.bug.github }}12078">#12078</a></td>
      </tr>
      <tr>
        <td>Chrome &amp; Safari</td>
        <td>OS X scrollbar clipped in <code>select[multiple]</code> with padding</td>
        <td><a href="{{ site.bug.chrome }}342208">Chromium issue #342208</a>, <a href="{{ site.bug.webkit }}128489">WebKit bug #128489</a></td>
        <td><a href="{{ site.bug.github }}12536">#12536</a></td>
      </tr>
      <tr>
        <td>Chrome</td>
        <td><code>display: table-cell; width: 100%;</code> doesn't work correctly on date <code>&lt;input&gt;</code></td>
        <td><a href="{{ site.bug.chrome }}346051">Chromium issue #346051</a></td>
        <td><a href="{{ site.bug.github }}12548">#12548</a></td>
      </tr>
      <tr>
        <td>Chrome</td>
        <td><code>&lt;input type="password"&gt;</code> sporadically causes bad widths on floated elements</td>
        <td><a href="{{ site.bug.chrome }}377346">Chrome issue #377346</a></td>
        <td><a href="{{ site.bug.github }}13892">#13892</a></td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>Insufficient CSS percentage precision</td>
        <td>(No public bug tracker)</td>
        <td><a href="{{ site.bug.github }}9282">#9282</a></td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>Justified nav rendering bug</td>
        <td>(No public bug tracker)</td>
        <td><a href="{{ site.bug.github }}9774">#9774</a></td>
      </tr>
    </tbody>
  </table>
</div>
