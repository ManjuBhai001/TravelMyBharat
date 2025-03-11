"use client"; // ✅ Ensure this is a client component

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import Carousel from "@/components/Carousal";
import CaroBodyHome from "@/components/CaroBodyHome";
import CaroBodyHome2 from "@/components/CaroBodyHome2";
import CaroBodyHome3 from "@/components/CaroBodyHome3";
import FooterA from "@/components/FooterA";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // 🔹 Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Show extra sections only on the homepage */}
      {pathname === "/" && (
        <>
          <HeroSection />
          <Carousel />
          <CaroBodyHome />
          <CaroBodyHome2 />
          <CaroBodyHome3 />
          <FooterA />
        </>
      )}
      {children} {/* Ensures new pages are displayed */}
    </>
  );
}
