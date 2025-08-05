---
title: A blog by zirpo
layout: base.njk
---
# Latest Posts

<ul class="post-list">
{%- for post in collections.post | reverse -%}
  <li class="post-list-item">
    {% set thumb = post | postThumbnail %}
    {% if thumb %}
    <img class="post-thumb" src="{{ thumb }}" alt="{{ post.data.title }}">
    {% endif %}
    <div class="post-list-content">
      <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
      <span class="post-date">{{ post.date | readableDate }}</span>
      <p class="post-excerpt">
        {{ post | postExcerpt }}
      </p>
    </div>
  </li>
{%- endfor -%}
</ul>
