import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Para equipos pequeños que inician",
    price: "29",
    period: "/mes",
    features: [
      "Hasta 5 usuarios",
      "5 GB almacenamiento",
      "Integraciones básicas",
      "Soporte por email",
      "Reportes esenciales",
    ],
    cta: "Comenzar gratis",
    popular: false,
  },
  {
    name: "Professional",
    description: "Para equipos en crecimiento",
    price: "79",
    period: "/mes",
    features: [
      "Hasta 25 usuarios",
      "50 GB almacenamiento",
      "Todas las integraciones",
      "Soporte prioritario 24/7",
      "Analytics avanzados",
      "API completa",
      "SSO / SAML",
    ],
    cta: "Prueba 14 días gratis",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Para grandes organizaciones",
    price: "Custom",
    period: "",
    features: [
      "Usuarios ilimitados",
      "Almacenamiento ilimitado",
      "Implementación dedicada",
      "Account manager personal",
      "SLA garantizado 99.99%",
      "Auditoría y compliance",
      "On-premise disponible",
    ],
    cta: "Contactar ventas",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding gradient-subtle">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Planes que crecen contigo
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Sin sorpresas. Sin contratos anuales obligatorios. Cancela cuando quieras.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "bg-card border-2 border-primary shadow-glow scale-[1.02]"
                  : "bg-card border border-border hover:border-primary/30 hover:shadow-elevated"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 rounded-full gradient-primary text-primary-foreground text-sm font-semibold">
                    Más popular
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-foreground">
                    {plan.price === "Custom" ? "" : "€"}
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
