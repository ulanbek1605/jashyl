import Bonuses from "@/components/Bonuses/Bonuses";
import GreenFuture from "@/components/GreenFuture/GreenFuture";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Map from "@/components/Map/Map";
import Partners from "@/components/Partners/Partners";
import RecyclingSection from "@/components/Recycling/Recycling";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <div className="global_container">
      <GreenFuture />
      <HowItWorks />
      <RecyclingSection />
      <Reviews />
      <Map />
      <Bonuses />
      <Partners />
    </div>
  );
}
