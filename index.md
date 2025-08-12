---
title: A blog by zirpo
layout: base.njk
---

{% set latestPost = collections.post[0] %}
{% if latestPost %}
<div class="featured-post">
  {% set thumb = latestPost | postThumbnail %}
  {% if thumb %}
  <img class="post-thumb" src="{{ thumb }}" alt="{{ latestPost.data.title }}">
  {% endif %}
  <div class="featured-post-content">
    <h2><a href="{{ latestPost.url }}">{{ latestPost.data.title }}</a></h2>
    <span class="post-date">{{ latestPost.date | readableDate }}</span>
    <p class="post-excerpt">
      {{ latestPost | postExcerpt }}
    </p>
  </div>
</div>
{% endif %}

<h2>All Posts</h2>
<ul class="post-list">
{%- for post in collections.post -%}
  {% if post.url != latestPost.url %}
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
  {% endif %}
{%- endfor -%}
</ul>
