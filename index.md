---
title: Mein automatisierter Blog
layout: base.njk
---
# Neueste Beiträge

<ul class="post-list">
{%- for post in collections.post | reverse -%}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <span class="post-date">{{ post.date.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
  </li>
{%- endfor -%}
</ul>
