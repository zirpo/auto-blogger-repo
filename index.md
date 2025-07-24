---
title: A blog by zirpo
layout: base.njk
---
# Latest Posts

<ul class="post-list">
{%- for post in collections.post | reverse -%}
  <li class="post-list-item">
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <span class="post-date">{{ post.date | readableDate }}</span>
    <p class="post-excerpt">
      {{ post | postExcerpt }}
    </p>
  </li>
{%- endfor -%}
</ul>
