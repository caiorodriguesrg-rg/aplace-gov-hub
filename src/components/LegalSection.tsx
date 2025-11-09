import { Scale, Shield, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const LegalSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 border-2 border-primary/20 shadow-lg animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Scale className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                Conformidade Legal Garantida
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                O Á.Place utiliza os procedimentos auxiliares de <strong className="text-foreground">pré-qualificação e credenciamento</strong> previstos na <strong className="text-foreground">Lei Federal nº 14.133/2021</strong>, garantindo segurança técnica e simplificação das contratações públicas.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Segurança Jurídica</h3>
                    <p className="text-sm text-muted-foreground">
                      Todos os processos seguem rigorosamente a legislação vigente
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileCheck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Conformidade Total</h3>
                    <p className="text-sm text-muted-foreground">
                      Credenciamento e pré-qualificação conforme a lei
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
