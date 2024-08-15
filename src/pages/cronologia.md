---
title: "Cronologia"
author: "Pedro Palazzo"
author_profile: false
excerpt: >-
  Por uma nova cronologia da construção vernacular, ou
  por que a nossa arquitetura tradicional é mais recente do que parece.
layout: "layouts/base.njk"
classes: "wide"
permalink: /cronologia/
templateEngineOverride: njk,md
---

---
nocite: "@palazzo:2023cronologia"
---

{% set timelineData %}
{
  "title": {
    "text": {
      "headline": "Linha do tempo aproximada das casas"
    }
  },
  "events": [
  {% for casa in collections.casa %}
    {
      "media": {
        "url": "{{ casa.data.header.teaser }}",
        "link": "{{ casa.url }}"
      },
    {% for event in casa.data.coverage.temporal.events %}
      {% if event.type == "creation" %}
          "start_date": {
            "year": "{{ event.start_date.year }}"
          },
          {% if event.display_date %}
          "display_date": "{{ event.display_date }}",
          {% endif %}
          "text": {
            "headline": "{{ casa.data.title }} ({{ casa.data.coverage.spatial.location.city }})",
            "text": "{{ casa.data.excerpt }}"
          }
      {% endif %}
    {% endfor %}
    }{% if not loop.last %},{% endif %}
  {% endfor %}
  ]
}
{% endset %}
<div class="w-100">
{% include "partials/timeline.njk" %}
</div>
