/**
 * Ventriloc button skins: pill silhouette (20px radius), carbon-filled
 * primary, carbon-outlined secondary. Orange never appears on actions.
 * Applied over Relume Button via className.
 */
export const pillPrimaryButtonClassName =
  "!rounded-[20px] !border-vent-carbon !bg-vent-carbon !font-body !text-[15px] !font-medium !text-white hover:!bg-vent-graphite hover:!border-vent-graphite";

export const pillOutlineButtonClassName =
  "!rounded-[20px] !border-vent-carbon !bg-transparent !font-body !text-[15px] !font-medium !text-vent-carbon hover:!bg-vent-carbon/5";

/** White pill for the rare carbon-filled surface (e.g. featured pricing card). */
export const pillPaperButtonClassName =
  "!rounded-[20px] !border-white !bg-white !font-body !text-[15px] !font-medium !text-vent-carbon hover:!bg-vent-chalk hover:!border-vent-chalk";
