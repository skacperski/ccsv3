Add Google Tag Manager and dataLayer event tracking to the landing app. Use this skill whenever asked to add GTM, tracking, analytics, events, measurement, or conversion tracking to the landing page. Also use it when asked to add a new tracking event to an existing setup.

Usage: `/add-tracking` — then specify the GTM container ID (e.g. `GTM-XXXXXXX`) or just say "add tracking" and ask for the ID if it's not known.

---

# Add Tracking

Wire Google Tag Manager + structured dataLayer events into `landing/` (Vite + React 19).

## What you'll set up

1. GTM container snippet in `index.html`
2. `landing/src/lib/tracking.js` — thin wrapper around `window.dataLayer`
3. Event calls wired into the components that already handle clicks and state

## Step 1 — GTM snippet in index.html

Add in `<head>` immediately after `<meta charset>`, before any other scripts:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

Add the noscript fallback as the **first child of `<body>`**:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

Replace `GTM-XXXXXXX` with the real container ID.

## Step 2 — tracking.js utility

Create `landing/src/lib/tracking.js`:

```js
export function track(event, props = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...props });
}
```

That's it. Thin on purpose — GTM handles enrichment and routing.

## Step 3 — Wire events

### 3a. Variant load — App.jsx

In the `useEffect` that fires on `variantId` change (already exists for SEO meta), add:

```js
import { track } from "./lib/tracking";

// inside the useEffect([c]):
track("variant_load", {
  variant_id: c.id,
  channel: c.channel,
  campaign: c.campaign ?? "direct",
});
```

### 3b. Survey CTA clicks — landing/src/components/ui.jsx

`SurveyCta` already scrolls to `#ankieta` on click. Add tracking before the scroll:

```js
import { track } from "../lib/tracking";

// inside SurveyCta onClick:
track("cta_click", { cta_type: "survey", cta_label: children, cta_location: "hero" });
document.getElementById("ankieta")?.scrollIntoView({ behavior: "smooth" });
```

For `CalendarCta`, track before `openCalendly()`:

```js
track("cta_click", { cta_type: "calendly", cta_label: children, cta_location: "hero" });
openCalendly();
```

> The `cta_location` ("hero", "nav", "risk", "pricing", "final") helps GA4 see where conversions come from. Pass it as a prop when the same component is used in multiple places.

### 3c. Calendly opens — landing/src/lib/calendly.js

At the top of `openCalendly()`, before the widget init:

```js
import { track } from "./tracking";

export function openCalendly(url = CALENDLY_URL, source = "unknown") {
  track("calendly_open", { source });
  // rest of existing code...
}
```

Callers that know their location should pass `source`, e.g. `openCalendly(CALENDLY_URL, "pricing")`.

### 3d. Survey flow — landing/src/components/Survey.jsx

Add to `handleSelect` (first question click starts the survey):

```js
import { track } from "../lib/tracking";

// in handleSelect, when phase becomes active for the first time:
if (step === START_ID) {
  track("survey_start", { variant_id: /* pass from props */ });
}
```

Add to the `computeFinalResult` call path (when `phase` transitions to `"result"`):

```js
track("survey_result", {
  result_id: result.id,
  result_label: result.title,
  variant_id: /* pass from props */,
});
```

Survey needs `variantId` passed as a prop from `App.jsx` so tracking has context.

### 3e. Pricing section visible (optional scroll event)

If you want to know when users reach pricing, add to `Pricing.jsx` with an IntersectionObserver:

```js
useEffect(() => {
  const el = document.getElementById("cennik");
  if (!el) return;
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        track("pricing_viewed", { variant_id });
        obs.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  obs.observe(el);
  return () => obs.disconnect();
}, [variant_id]);
```

## Event catalog

| Event | When fires | Key props |
|---|---|---|
| `variant_load` | App mounts or variant switches | `variant_id`, `channel`, `campaign` |
| `cta_click` | Any CTA button click | `cta_type` (survey\|calendly), `cta_label`, `cta_location` |
| `calendly_open` | Calendly popup opens | `source` |
| `survey_start` | First answer selected | `variant_id` |
| `survey_result` | Result screen shown | `result_id`, `result_label`, `variant_id` |
| `pricing_viewed` | Pricing section enters viewport | `variant_id` |

## Verification (browser dev tools)

1. Open DevTools → Console
2. Run: `window.dataLayer`
3. Interact with the page — each event should appear as an object in the array
4. Or install the **GTM Preview** mode from tagmanager.google.com to see tags firing in real time

## GTM setup on tagmanager.google.com

After wiring the dataLayer:
1. Create triggers for each custom event (`variant_load`, `cta_click`, etc.)
2. Create a GA4 Event tag per trigger, mapping `event` → event name, other props → event parameters
3. Publish the container
4. Verify in GA4 DebugView

> The dataLayer events are the contract. GTM configuration (triggers, tags, GA4 property ID) is done in the GTM UI — not in this codebase.
