import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Phone, MapPin, Mail, ChevronDown, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from '@/assets/logo.png'; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (location.pathname.startsWith('/dashboard')) {
    return <>{children}</>;
  }

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/about" },
    { name: "News", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const services = [
    { name: "Digital Health Records", href: "/services/health-records" },
    { name: "Health Screening", href: "/services/screening" },
    { name: "Telemedicine", href: "/services/telemedicine" },
    { name: "Vaccination Services", href: "/services/vaccination" },
  ];

  const miscellaneous = [
    { name: "Policies", href: "/policies" },
    { name: "Guidelines", href: "/guidelines" },
    { name: "Resources", href: "/resources" },
    { name: "Forms", href: "/forms" },
  ];

  const downloads = [
    { name: "User Manual", href: "/downloads/manual" },
    { name: "Health Forms", href: "/downloads/forms" },
    { name: "Reports", href: "/downloads/reports" },
    { name: "Certificates", href: "/downloads/certificates" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-black relative">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white border-2 border-black">
                  <img 
                    src={logoImage} 
                    alt="KerMedix Logo" 
                    className="min-w-full min-h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-black">KerMedix</div>
                  <div className="text-sm text-gray-600">Health Services</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex ml-10 items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    location.pathname === item.href
                      ? "text-black font-bold border-b-2 border-black"
                      : "text-black hover:text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Dropdowns */}
              <DropdownMenu>
                <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1">
                  Services <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-2 border-black z-50">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link to={service.href} className="text-black hover:bg-gray-100 cursor-pointer">
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1">
                  Miscellaneous <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-2 border-black z-50">
                  {miscellaneous.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className="text-black hover:bg-gray-100 cursor-pointer">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-black hover:text-gray-700 flex items-center gap-1">
                  Downloads <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-2 border-black z-50">
                  {downloads.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className="text-black hover:bg-gray-100 cursor-pointer">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Right Side - Language & Portal */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white">
                    User Portal <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-2 border-black z-50 w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/login?role=migrant" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                      Migrant Login
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/login?role=doctor" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                      Doctor Login
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/login?role=admin" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                      Admin Login
                    </Link>
                  </DropdownMenuItem>
                  <div className="border-t border-gray-300 my-1"></div>
                  <DropdownMenuItem asChild>
                    <Link to="/register" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                      Register New User
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                className="text-black border-2 border-black p-2 rounded-md"
                onClick={() => setMobileMenuOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
            <div className="w-72 bg-white h-full shadow-lg p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <div className="text-xl font-bold text-black">KerMedix Menu</div>
                <button onClick={() => setMobileMenuOpen(false)} className="text-black p-2 rounded-md border border-black">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Navigation */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-gray-700">Navigation</h4>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block py-2 px-2 text-black hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-gray-700">Services</h4>
                  {services.map((s) => (
                    <Link
                      key={s.name}
                      to={s.href}
                      className="block py-2 px-2 text-black hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>

                {/* Miscellaneous */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-gray-700">Miscellaneous</h4>
                  {miscellaneous.map((m) => (
                    <Link
                      key={m.name}
                      to={m.href}
                      className="block py-2 px-2 text-black hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {m.name}
                    </Link>
                  ))}
                </div>

                {/* Downloads */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-gray-700">Downloads</h4>
                  {downloads.map((d) => (
                    <Link
                      key={d.name}
                      to={d.href}
                      className="block py-2 px-2 text-black hover:bg-gray-100 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>

                {/* Language & User Portal */}
                <div className="mt-6 border-t border-gray-300 pt-4 space-y-4">
                  <LanguageSwitcher />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full border-2 border-black text-black hover:bg-black hover:text-white">
                        User Portal <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border-2 border-black z-50 w-full">
                      <DropdownMenuItem asChild>
                        <Link to="/login?role=migrant" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                          Migrant Login
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/login?role=doctor" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                          Doctor Login
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/login?role=admin" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                          Admin Login
                        </Link>
                      </DropdownMenuItem>
                      <div className="border-t border-gray-300 my-1"></div>
                      <DropdownMenuItem asChild>
                        <Link to="/register" className="text-black hover:bg-gray-100 cursor-pointer font-medium">
                          Register New User
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img src={logoImage} alt="KerMedix Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-xl font-bold">KerMedix Health</div>
                  <div className="text-sm text-gray-300">Digital Health Platform</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+917848091884" className="hover:text-white">+91-7848091884</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:pidugusainaresh28@gmail.com" className="hover:text-white">pidugusainaresh28@gmail.com</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span>Kerala, India</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.name}>
                    <Link to={s.href} className="text-gray-300 hover:text-white transition-colors">{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">{t('nav.help')}</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">{t('nav.faq')}</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/login" className="text-gray-300 hover:text-white transition-colors">Portal Login</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scrolling footer */}
        <div className="w-full bg-black border-t-2 border-gray-700 overflow-hidden relative h-32">
          <div className="absolute top-1/2 -translate-y-1/2 flex animate-marquee whitespace-nowrap">
            <span className="text-white text-5xl" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              © 2025 KerMedix Health Services. All rights reserved. &nbsp;
              © 2025 KerMedix Health Services. All rights reserved. &nbsp;
            </span>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
