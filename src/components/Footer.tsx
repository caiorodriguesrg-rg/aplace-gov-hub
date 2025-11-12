import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/aplace-logo-new.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary-dark text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Logo e Descrição */}
          <div>
            <img src={logoImage} alt="Á.Place - Sistema de Marketplace" className="h-10 w-auto mb-4" />
            <p className="text-white/80 mb-4">
              O marketplace digital que está transformando as compras públicas no Brasil.
            </p>
          </div>

          {/* Links Institucionais */}
          <div>
            <h4 className="text-lg font-bold mb-4">Institucional</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#beneficios" className="hover:text-accent transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-accent transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-accent transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4">Entre em Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@apice.tech" className="hover:text-accent transition-colors">
                  adm@apicetecnologias.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+5500000000000" className="hover:text-accent transition-colors">
                  +55 (85) 99998-9237
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center sm:text-left">
              © {currentYear} Ápice Tecnologias - Todos os direitos reservados
            </p>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;