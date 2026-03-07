import Link from "next/link";
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
    title: "Travel Services",
    links: [
      { name: "Canada Immigration", href: "/travel" },
      { name: "Australia Skilled Visa", href: "/travel" },
      { name: "UK Study Permits", href: "/travel" },
      { name: "Family Relocation", href: "/travel" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/lightertravel" },
  { icon: Linkedin, href: "https://linkedin.com/company/lighter-travel" },
  { icon: Facebook, href: "https://facebook.com/lightertravel" },
  { icon: Twitter, href: "https://twitter.com/lightertravel" },
];

export const FooterTravel = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex flex-col">
            <span className="text-slate-900 t-h3 tracking-[-2px] font-black uppercase">
              LiGHTER <span className="text-blue-600">⚡</span>
            </span>
          </Link>
          <p className="text-slate-500 t-body">
            Sparking Growth. Building Futures. Your journey to the world starts here with professional immigration support.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {footerLinks.map((group) => (
          <div key={group.title} className="flex flex-col gap-6">
            <h4 className="t-label text-slate-400 text-[10px] tracking-[3px]">{group.title}</h4>
            <ul className="flex flex-col gap-4">
              {group.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors t-body font-medium"
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
          <h4 className="t-label text-slate-400 text-[10px] tracking-[3px]">Contact</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-slate-600 t-body">
              <MapPin size={20} className="text-blue-600 shrink-0 mt-1" />
              <span>KM 34, Lekki-Epe Expressway, Lekki, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-3 text-slate-600 t-body">
              <Phone size={20} className="text-blue-600 shrink-0" />
              <span>+234 707 059 9190</span>
            </li>
            <li className="flex items-center gap-3 text-slate-600 t-body">
              <Mail size={20} className="text-blue-600 shrink-0" />
              <span>lighterconsult@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-slate-600 t-body">
              <Globe size={20} className="text-blue-600 shrink-0" />
              <span>www.lighter.online</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-slate-100 flex flex-col items-center">
        <p className="text-slate-400 text-[12px] font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} LiGHTER DIGITAL. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
