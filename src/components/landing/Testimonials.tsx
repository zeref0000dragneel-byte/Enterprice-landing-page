import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "SaasFlow transformó completamente nuestra operación. Redujimos tiempo de gestión en un 40% el primer mes.",
    author: "María García",
    role: "COO, TechStartup",
    avatar: "MG",
  },
  {
    quote: "La mejor inversión que hemos hecho. El ROI fue positivo en menos de 2 semanas. Increíble soporte técnico.",
    author: "Carlos Rodríguez",
    role: "CEO, DataFlow Inc.",
    avatar: "CR",
  },
  {
    quote: "Probamos 5 herramientas antes. SaasFlow es la única que realmente entendió las necesidades B2B enterprise.",
    author: "Laura Martínez",
    role: "VP Operations, GlobalCorp",
    avatar: "LM",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Más de 500 empresas confían en SaasFlow para sus operaciones diarias.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos Section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Empresas líderes que confían en nosotros
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Acme Corporation", "TechFlow Systems", "DataSync Pro", "CloudBase", "InnovateCo", "ScaleUp"].map(
              (company) => (
                <span
                  key={company}
                  className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {company}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
