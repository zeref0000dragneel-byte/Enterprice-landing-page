import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  Globe 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automatización Inteligente",
    description: "Elimina tareas repetitivas con workflows que se adaptan a tu negocio. Ahorra +20 horas semanales.",
  },
  {
    icon: Shield,
    title: "Seguridad Enterprise",
    description: "Cumplimiento SOC2 y GDPR. Tus datos protegidos con encriptación de nivel bancario.",
  },
  {
    icon: BarChart3,
    title: "Analytics en Tiempo Real",
    description: "Dashboards personalizables con métricas que importan. Toma decisiones basadas en datos.",
  },
  {
    icon: Users,
    title: "Colaboración Sin Fricciones",
    description: "Conecta equipos distribuidos. Comunicación centralizada y transparente.",
  },
  {
    icon: Clock,
    title: "Implementación Rápida",
    description: "De cero a productivo en 48 horas. Onboarding guiado y soporte premium incluido.",
  },
  {
    icon: Globe,
    title: "Integraciones Nativas",
    description: "+200 conexiones con tus herramientas favoritas. API REST completa para custom builds.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding gradient-subtle">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Características
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Todo lo que necesitas para escalar
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Herramientas potentes diseñadas para equipos modernos que buscan resultados excepcionales.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
