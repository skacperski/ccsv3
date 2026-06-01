import { useEffect } from "react";
import type { SeoMeta, VariantId } from "../content/types";

const SITE_NAME = "CyCommSec";
const PRODUCTION_ORIGIN = "https://ccsv3.vercel.app";

function upsertMeta(attr: "name" | "property", key: string, value: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function applyVariantSeo(seo: SeoMeta, variantId: VariantId) {
  document.title = seo.title;

  upsertMeta("name", "description", seo.description);
  upsertMeta("name", "robots", "index, follow");

  upsertMeta("property", "og:title", seo.title);
  upsertMeta("property", "og:description", seo.description);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:locale", "pl_PL");
  upsertMeta("property", "og:site_name", SITE_NAME);

  upsertMeta("name", "twitter:card", "summary");
  upsertMeta("name", "twitter:title", seo.title);
  upsertMeta("name", "twitter:description", seo.description);

  const pageUrl = new URL(window.location.href);
  pageUrl.searchParams.set("variant", variantId);
  upsertMeta("property", "og:url", pageUrl.toString());

  const canonical = new URL(PRODUCTION_ORIGIN);
  canonical.searchParams.set("variant", variantId);
  upsertLink("canonical", canonical.toString());
}

export function useVariantSeo(seo: SeoMeta, variantId: VariantId) {
  useEffect(() => {
    applyVariantSeo(seo, variantId);
  }, [seo, variantId]);
}
