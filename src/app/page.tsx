import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { CategoryTiles } from "@/components/home/category-tiles";
import { FeaturedProducts } from "@/components/home/featured-products";
import { NewArrivals } from "@/components/home/new-arrivals";
import { PromotionalMosaic } from "@/components/home/promotional-mosaic";
import { Newsletter } from "@/components/home/newsletter";
import { StoreLocations } from "@/components/home/store-locations";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroCarousel />
        <CategoryTiles />
        <FeaturedProducts />
        <NewArrivals />
        <PromotionalMosaic />
        <Newsletter />
        <StoreLocations />
      </main>
      <Footer />
    </>
  );
}
