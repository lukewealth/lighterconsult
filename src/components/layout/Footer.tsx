import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Facebook, Twitter, Phone, Mail, MapPin, Globe } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Digital Marketing", href: "/consult" },
      { name: "Immigration", href: "/travel" },
      { name: "Brand Building", href: "/services" },
      { name: "Content Production", href: "/services" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/lighterconsult" },
  { icon: Linkedin, href: "https://linkedin.com/company/lighter-consult" },
  { icon: Facebook, href: "https://facebook.com/lighterconsult" },
  { icon: Twitter, href: "https://twitter.com/lighterconsult" },
];

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex flex-col">
            <div className="relative w-32 h-10">
              <Image
                src="/assets/lighter-logo.png"
                alt="LiGHTER"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-slate-400 t-body">
            Sparking Growth. Building Futures. The digital force behind Africa&apos;s boldest brands.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {footerLinks.map((group) => (
          <div key={group.title} className="flex flex-col gap-6">
            <h4 className="t-label text-slate-500 text-[10px] tracking-[3px]">{group.title}</h4>
            <ul className="flex flex-col gap-4">
              {group.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-500 transition-colors t-body font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Column */}
        <div className="flex flex-col gap-6">
          <h4 className="t-label text-slate-500 text-[10px] tracking-[3px]">Contact</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-slate-300 t-body">
              <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
              <span>KM 34, Lekki-Epe Expressway, Lekki, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300 t-body">
              <Phone size={20} className="text-blue-500 shrink-0" />
              <span>+234 707 059 9190</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300 t-body">
              <Mail size={20} className="text-blue-500 shrink-0" />
              <span>lighterconsult@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300 t-body">
              <Globe size={20} className="text-blue-500 shrink-0" />
              <span>www.lighter.online</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-slate-800 flex flex-col items-center">
        <p className="text-slate-500 text-[12px] font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} LiGHTER DIGITAL. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
