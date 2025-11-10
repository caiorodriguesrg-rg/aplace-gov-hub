import { Clock, FileText, TrendingUp, Zap, Monitor, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Uma Nova Era nas Compras Públicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformando processos burocráticos em experiências eficientes e modernas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* ANTES */}
          <Card className="p-6 sm:p-8 border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-transparent hover-lift animate-fade-in shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-md">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">ANTES</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Processos de 7-8 meses</p>
                  <p className="text-sm text-muted-foreground">Licitações longas e desgastantes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Burocracia excessiva</p>
                  <p className="text-sm text-muted-foreground">Pilhas de documentos físicos</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Falta de previsibilidade</p>
                  <p className="text-sm text-muted-foreground">Impossível planejar aquisições</p>
                </div>
              </li>
            </ul>
          </Card>

          {/* AGORA */}
          <Card className="p-6 sm:p-8 border-2 border-accent bg-gradient-to-br from-accent/15 via-accent/8 to-transparent hover-lift animate-fade-in md:scale-105 shadow-lg hover:shadow-accent transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-accent">AGORA</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Processos em até 20 dias</p>
                  <p className="text-sm text-muted-foreground">Agilidade sem precedentes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Monitor className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">100% digital e simplificado</p>
                  <p className="text-sm text-muted-foreground">Interface moderna e intuitiva</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Previsibilidade total</p>
                  <p className="text-sm text-muted-foreground">Planejamento eficiente de aquisições</p>
                </div>
              </li>
            </ul>
          </Card>

          {/* RESULTADO */}
          <Card className="p-6 sm:p-8 border-2 border-accent bg-gradient-to-br from-accent/10 via-accent/5 to-transparent hover-lift animate-fade-in shadow-md hover:shadow-accent transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center shadow-md">
                <TrendingUp className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-accent">RESULTADO</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5 flex-shrink-0 text-xs font-bold shadow-sm">✓</div>
                <div>
                  <p className="font-semibold mb-1">80% menos tempo</p>
                  <p className="text-sm text-muted-foreground">Eficiência comprovada</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5 flex-shrink-0 text-xs font-bold shadow-sm">✓</div>
                <div>
                  <p className="font-semibold mb-1">Maior eficiência</p>
                  <p className="text-sm text-muted-foreground">Recursos otimizados</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center mt-0.5 flex-shrink-0 text-xs font-bold shadow-sm">✓</div>
                <div>
                  <p className="font-semibold mb-1">Transparência garantida</p>
                  <p className="text-sm text-muted-foreground">Total rastreabilidade</p>
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
