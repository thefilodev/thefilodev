import { AccessibilityIcon, Building2Icon, BuildingIcon, ChurchIcon, HospitalIcon } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function JapanEfficientMoving() {
  return (
    <div className="p-2">
      <div className="p-2 border border-white">
        <div className="relative h-28 mx-auto border-b-8 border-b-white">
          <Marquee className="w-full" speed={20}>
            <div className="flex items-end justify-between gap-1">
              <ChurchIcon className="size-28" />
              <Building2Icon className="size-28" />
              <HospitalIcon className="size-28" />
            </div>
          </Marquee>
          <div className="absolute inset-0 flex items-end justify-center z-10">
          </div>
        </div>
      </div>
    </div>
  );
}
