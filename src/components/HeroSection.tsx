import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard-new.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent-foreground rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Check className="w-4 h-4" />
              <span className="text-sm font-semibold">Redução de até 80% no tempo de aquisição</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              O Marketplace Digital das Compras Públicas Brasileiras
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Conectamos órgãos públicos e fornecedores em um ambiente moderno, transparente e eficiente
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="accent"
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                Conhecer a Plataforma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="accent-outline"
                size="lg"
                onClick={scrollToContact}
              >
                Agendar Demonstração
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">80%</div>
                <div className="text-sm text-white/80">Menos tempo</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">20</div>
                <div className="text-sm text-white/80">Dias em média</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-white/80">Digital</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-scale-in lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src={heroDashboard}
                alt="Dashboard do Á.Place"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
