import { Clock, FileText, TrendingUp, Zap, Monitor, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Uma Nova Era nas Compras Públicas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformando processos burocráticos em experiências eficientes e modernas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* ANTES */}
          <Card className="p-8 sm:p-10 border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-transparent hover-lift animate-fade-in shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-md">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-primary">ANTES</h3>
            </div>
            
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg mb-1.5">Processos de 7-8 meses</p>
                  <p className="text-base text-muted-foreground">Licitações longas e desgastantes</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg mb-1.5">Burocracia excessiva</p>
                  <p className="text-base text-muted-foreground">Pilhas de documentos físicos</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg mb-1.5">Falta de previsibilidade</p>
                  <p className="text-base text-muted-foreground">Impossível planejar aquisições</p>
                </div>
              </li>
            </ul>
          </Card>

          {/* AGORA */}
          <Card className="p-8 sm:p-10 border-2 border-accent bg-gradient-to-br from-accent/15 via-accent/8 to-transparent hover-lift animate-fade-in md:scale-105 shadow-lg hover:shadow-accent transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center shadow-md">
                <Zap className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-accent">AGORA</h3>
            </div>
            
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg mb-1.5">Processos em até 20 dias</p>
                  <p className="text-base text-muted-foreground">Agilidade sem precedentes</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Monitor className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg mb-1.5">100% digital e simplificado</p>
                  <p className="text-base text-muted-foreground">Interface moderna e intuitiva</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg mb-1.5">Previsibilidade total</p>
                  <p className="text-base text-muted-foreground">Planejamento eficiente de aquisições</p>
                </div>
              </li>
            </ul>
          </Card>

          {/* RESULTADO */}
          <Card className="p-8 sm:p-10 border-2 border-accent bg-gradient-to-br from-accent/10 via-accent/5 to-transparent hover-lift animate-fade-in shadow-md hover:shadow-accent transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center shadow-md">
                <TrendingUp className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-accent">RESULTADO</h3>
            </div>
            
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-1 flex-shrink-0 text-sm font-bold shadow-sm">✓</div>
                <div>
                  <p className="font-semibold text-lg mb-1.5">80% menos tempo</p>
                  <p className="text-base text-muted-foreground">Eficiência comprovada</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-1 flex-shrink-0 text-sm font-bold shadow-sm">✓</div>
                <div>
                  <p className="font-semibold text-lg mb-1.5">Maior eficiência</p>
                  <p className="text-base text-muted-foreground">Recursos otimizados</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-1 flex-shrink-0 text-sm font-bold shadow-sm">✓</div>
                <div>
                  <p className="font-semibold text-lg mb-1.5">Transparência garantida</p>
                  <p className="text-base text-muted-foreground">Total rastreabilidade</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
