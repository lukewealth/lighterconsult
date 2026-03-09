import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  // Use the new official logo by default
  const src = "/assets/official-logo.png";
  
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image 
        src={src} 
        alt="LiGHTER DIGITAL" 
        width={180} 
        height={48} 
        className="object-contain h-10 w-auto"
        priority
      />
    </Link>
  );
};
