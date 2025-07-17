---
title: Mein automatisierter Blog
layout: base.njk
---
# Neueste Beiträge
<ul>
{%- for post in collections.post -%}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{%- endfor -%}
</ul>
    