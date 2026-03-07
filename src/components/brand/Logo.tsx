import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "main" | "text";
}

export const Logo = ({ className, variant = "main" }: LogoProps) => {
  const src = variant === "main" ? "/assets/logos/lighter-main.png" : "/assets/logos/lighter-text.png";
  
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image 
        src={src} 
        alt="LiGHTER DIGITAL" 
        width={150} 
        height={40} 
        className="object-contain h-10 w-auto"
        priority
      />
    </Link>
  );
};
