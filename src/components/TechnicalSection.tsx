import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const TechnicalSection = () => {
  const features = [
    {
      title: "Credenciamento Eletrônico",
      description: "Procedimentos Lei 14.133/2021",
    },
    {
      title: "Pré-qualificação de Produtos e Serviços",
      description: "Fornecedores verificados e qualificados",
    },
    {
      title: "Plataforma Integrada",
      description: "Disponível Web + Mobile",
    },
    {
      title: "Documentação 100% Digital",
      description: "Sem papel, sem burocracia",
    },
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Tecnologia a Serviço da Eficiência Pública
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recursos técnicos que fazem a diferença no dia a dia
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover-lift animate-fade-in border-2 hover:border-accent/50 bg-gradient-to-br from-background to-secondary/30 shadow-sm hover:shadow-md transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-base text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
