import {
  LuActivity,
  LuBriefcase,
  LuBug,
  LuBuilding2,
  LuClipboardList,
  LuClock,
  LuFileSearch,
  LuFileText,
  LuNetwork,
  LuScale,
  LuShield,
  LuShieldAlert,
  LuUsers,
} from "react-icons/lu";

/** Zagrożenie: główna karta + 2 boczne */
export const RISK_ICONS = [LuScale, LuClock, LuShieldAlert];

/** Jak to wygląda: ankieta → audyt → wdrożenie / usługa */
export const HOW_ICONS = [LuClipboardList, LuFileSearch, LuBriefcase];

/** Filary usługi: regulacja → technologia → ciągłość */
export const PILLAR_ICONS = [LuFileText, LuBug, LuActivity];

/** Hero: kolumna dekoracyjna (zamiast stockowych zdjęć) */
export const HERO_DECOR_ICONS = [
  LuShield,
  LuScale,
  LuClipboardList,
  LuFileSearch,
  LuActivity,
  LuBuilding2,
];

/** Cta38: podgląd przy hover na liście zakresu */
export const SCOPE_HOVER_ICONS = [LuShield, LuNetwork, LuUsers, LuFileText];

export const LOGO_PLACEHOLDER_ICON = LuBuilding2;

export function pickIcon(icons, index) {
  return icons[index % icons.length];
}
