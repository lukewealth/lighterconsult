import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoConsultProps {
  className?: string;
  variant?: "full" | "wordmark" | "symbol";
}

export const LogoConsult = ({ className, variant = "wordmark" }: LogoConsultProps) => {
  const src = variant === "wordmark" 
    ? "/assets/logos/consult-wordmark.png" 
    : "/assets/logos/consult-symbol.jpg";
  
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image 
        src={src} 
        alt="LiGHTER CONSULT" 
        width={200} 
        height={50} 
        className="object-contain h-12 w-auto"
        priority
      />
    </Link>
  );
};
