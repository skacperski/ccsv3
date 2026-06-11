import { useCallback, useEffect, useState } from "react";
import Page from "./steep-page/index.jsx";
import { VariantSwitcher } from "./components/VariantSwitcher";
import { TrackingOverlay } from "./components/TrackingOverlay";
import { VARIANTS, resolveVariantId } from "./content/variants";
import type { VariantId } from "./content/types";
import { useVariantSeo } from "./hooks/useVariantSeo";
import { initDataLayer, setTrackingVariant, track } from "./tracking/tracking";

export default function App() {
  const [variantId, setVariantId] = useState<VariantId>(() =>
    resolveVariantId(window.location.search),
  );
  const [trackingOn, setTrackingOn] = useState(false);

  const content = VARIANTS[variantId];
  useVariantSeo(content.seo, variantId);

  useEffect(() => {
    initDataLayer();
  }, []);

  // Pomiar rezerwacji w Calendly — popup wysyła postMessage `calendly.event_scheduled`.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const data = e.data as { event?: string } | undefined;
      if (typeof data?.event !== "string" || !data.event.startsWith("calendly.")) return;
      if (data.event === "calendly.event_scheduled") {
        track("calendar_request", { source: "calendly" });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    setTrackingVariant(variantId);
  }, [variantId]);

  const handleChange = useCallback((id: VariantId) => {
    setVariantId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("variant", id);
    window.history.replaceState({}, "", url);
  }, []);

  return (
    <>
      <div className="pb-10">
        <Page content={content} />
      </div>
      <TrackingOverlay enabled={trackingOn} />
      <VariantSwitcher
        current={variantId}
        onChange={handleChange}
        trackingOn={trackingOn}
        onToggleTracking={() => setTrackingOn((on) => !on)}
      />
    </>
  );
}
