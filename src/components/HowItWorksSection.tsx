import { ClipboardList, Search, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Planeje",
      description: "Defina suas demandas e publique no portal",
      details: "Organize suas necessidades de aquisição de forma simples e publique no marketplace para que fornecedores qualificados possam visualizar.",
    },
    {
      number: "02",
      icon: Search,
      title: "Escolha",
      description: "Compare propostas de fornecedores pré-qualificados",
      details: "Receba e analise propostas de fornecedores já credenciados e pré-qualificados, garantindo qualidade e competitividade.",
    },
    {
      number: "03",
      icon: Activity,
      title: "Acompanhe",
      description: "Monitore todo o processo digitalmente",
      details: "Tenha visibilidade completa de todas as etapas, desde a contratação até a entrega e pagamento, tudo em tempo real.",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simples como um E-commerce, Seguro como Deve Ser
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Três passos para revolucionar as compras do seu órgão
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="p-6 sm:p-8 text-center h-full hover-lift border-2 hover:border-primary/30 transition-all">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6 shadow-md relative z-10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-3">{step.description}</p>
                  <p className="text-muted-foreground">{step.details}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
