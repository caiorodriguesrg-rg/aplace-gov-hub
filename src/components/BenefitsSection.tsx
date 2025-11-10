import { Zap, Shield, Scale, TrendingUp, Users, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Agilidade Comprovada",
      description: "Reduza de 8 meses para 20 dias",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Todas as etapas rastreáveis e impessoais",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Scale,
      title: "Base Legal Sólida",
      description: "Lei Federal nº 14.133/2021",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: TrendingUp,
      title: "Previsibilidade",
      description: "Planejamento de aquisições com antecedência",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Competitividade Real",
      description: "Múltiplos fornecedores, melhores preços",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: BarChart,
      title: "Controle Completo",
      description: "Acompanhamento do pedido ao pagamento",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Por que Escolher o Á.Place?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A solução completa para modernizar as compras públicas do seu órgão
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-lift animate-fade-in border-2 hover:border-accent/50 transition-all bg-gradient-to-br from-background to-secondary/30 shadow-sm hover:shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
