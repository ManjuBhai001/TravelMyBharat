import ItenaryUttarakhand from "@/components/ItenaryUttarakhand";
import BannerGoldenTrip from "@/components/BannerGoldenTrip";
import CarousalGoldenTrip from "@/components/CarousalGoldenTrip";
import DropdownsGoldenTripAgra from "@/components/DropdownsGoldenTripAgra";
export default function GoldenTriangleTajMahalLayout({ children }) {
  return (
    <div>
      {children}
      <ItenaryUttarakhand />
      <BannerGoldenTrip />
      <CarousalGoldenTrip />
      <DropdownsGoldenTripAgra />
    </div>
  );
}
