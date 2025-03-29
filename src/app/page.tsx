import GreenFuture from "@/components/GreenFuture/GreenFuture";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import RecyclingSection from "@/components/Recycling/Recycling";

export default function Home() {
  return (
    <div className="global_container">
      <GreenFuture />
      <HowItWorks />
      <RecyclingSection />
    </div>
  );
}
