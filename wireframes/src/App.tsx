import { useCallback, useState } from "react";
import Page from "./relume-page/index.jsx";
import { VariantSwitcher } from "./components/VariantSwitcher";
import { VARIANTS, resolveVariantId } from "./content/variants";
import type { VariantId } from "./content/types";

export default function App() {
  const [variantId, setVariantId] = useState<VariantId>(() =>
    resolveVariantId(window.location.search),
  );

  const handleChange = useCallback((id: VariantId) => {
    setVariantId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("variant", id);
    window.history.replaceState({}, "", url);
  }, []);

  return (
    <>
      <div className="pb-9">
        <Page content={VARIANTS[variantId]} />
      </div>
      <VariantSwitcher current={variantId} onChange={handleChange} />
    </>
  );
}
