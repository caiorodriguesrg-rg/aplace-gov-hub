import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/aplace-logo.png";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Á.Place - Sistema de Marketplace" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("beneficios")} className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Benefícios
            </button>
            <button onClick={() => scrollToSection("como-funciona")} className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection("diferenciais")} className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Diferenciais
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Contato
            </button>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button variant="accent" size="default" onClick={() => scrollToSection("contato")}>
              Solicitar Demonstração
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="md:hidden py-4 border-t border-primary/20 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection("beneficios")} className="text-sm font-medium text-white/90 hover:text-white transition-colors text-left py-2">
                Benefícios
              </button>
              <button onClick={() => scrollToSection("como-funciona")} className="text-sm font-medium text-white/90 hover:text-white transition-colors text-left py-2">
                Como Funciona
              </button>
              <button onClick={() => scrollToSection("diferenciais")} className="text-sm font-medium text-white/90 hover:text-white transition-colors text-left py-2">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-sm font-medium text-white/90 hover:text-white transition-colors text-left py-2">
                Contato
              </button>
              <Button variant="accent" size="default" onClick={() => scrollToSection("contato")} className="w-full mt-2">
                Solicitar Demonstração
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;