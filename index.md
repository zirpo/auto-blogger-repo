---
title: A blog by zirpo
layout: base.njk
---
# Latest Posts

<ul class="post-list">
{%- for post in collections.post | reverse -%}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <span class="post-date">{{ post.date | readableDate }}</span>
  </li>
{%- endfor -%}
</ul>
