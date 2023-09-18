"use client";
import React from "react";

import {
  BrandAd,
  EditorNote,
  RisingBrand,
  CodyContainer,
} from "@/components/domains/showroom";

export default function page() {
  return (
    <section>
      <BrandAd />
      <CodyContainer />
      <EditorNote />
      <RisingBrand />
    </section>
  );
}
