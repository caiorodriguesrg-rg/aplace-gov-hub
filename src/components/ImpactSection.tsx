import { TrendingDown, Clock, Shield, MapPin } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: TrendingDown,
      value: "80%",
      label: "redução no tempo de aquisição",
    },
    {
      icon: Clock,
      value: "20 dias",
      label: "para conclusão de processos",
    },
    {
      icon: Shield,
      value: "100%",
      label: "transparente e rastreável",
    },
    {
      icon: MapPin,
      value: "Nacional",
      label: "cobertura em todo Brasil",
    },
  ];

  return (
    <section className="py-16 sm:py-24 gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Números que Fazem a Diferença
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Resultados reais que transformam a gestão pública
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-lg hover:bg-white/15 transition-all">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <div className="text-5xl sm:text-6xl font-bold text-white mb-3">{stat.value}</div>
                <div className="text-white/80 text-base sm:text-lg">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
