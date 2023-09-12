"use client";

import {
  HomeBanner,
  HomeCategory,
  HomeCoordination,
  HomeExhibition,
  HomeTodayItemList,
} from "@/components/domains";

export default function HomePage() {
  return (
    <main>
      <HomeBanner />
      <HomeTodayItemList />
      <HomeCategory />
      <HomeCoordination />
      <HomeExhibition />
    </main>
  );
}
