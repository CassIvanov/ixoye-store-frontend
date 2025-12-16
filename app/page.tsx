import Image from "next/image";
import { Button } from "@/components/ui/button"
import CarouselTextBanner from "@/components/carousel-text-banner"
import FeaturedProducts from "@/components/featured-products";
import BannerDiscount from "@/components/banner-discount"
import ChooseCategory from "@/components/choose-category";
import InfoCards from "@/components/info-cards";


export default function Home() {
  return (
   <main>
    <CarouselTextBanner />
    <FeaturedProducts />
    <InfoCards />
    <BannerDiscount />
    <ChooseCategory />
   </main>
  );
}
