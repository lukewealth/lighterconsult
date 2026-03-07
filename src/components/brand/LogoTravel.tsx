import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoTravelProps {
  className?: string;
}

export const LogoTravel = ({ className }: LogoTravelProps) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image 
        src="/assets/logos/travel-full.png" 
        alt="LiGHTER TRAVEL" 
        width={200} 
        height={50} 
        className="object-contain h-12 w-auto"
        priority
      />
    </Link>
  );
};
