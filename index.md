---
title: Mein automatisierter Blog
layout: base.njk
---
# Neueste Beiträge

<ul class="post-list">
{%- for post in collections.post | reverse -%}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <span class="post-date">{{ post.date | date: "%d %B %Y" }}</span>
  </li>
{%- endfor -%}
</ul>
