import Appointment from "@/components/main/Appointment";
import Hero from "@/components/main/Hero";
import Work from "@/components/main/Work";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Work />
        <Appointment />
      </div>
    </main>
  );
}
