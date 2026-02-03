import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30" />
      
      {/* Glow Effects */}
      <div className="hero-glow top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 opacity-50" />
      
      <div className="container-tight relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-hero-foreground/80">
              Nuevo: Integración con IA disponible
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-hero-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up text-balance">
            Automatiza tu negocio.{" "}
            <span className="gradient-text">Escala sin límites.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-hero-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up text-balance">
            La plataforma todo-en-uno que transforma equipos B2B en máquinas de productividad. 
            Reduce costes, acelera procesos y toma decisiones con datos en tiempo real.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up">
            <Button variant="hero" size="xl">
              Comenzar prueba gratuita
              <ArrowRight className="ml-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play size={18} className="mr-1" />
              Ver demo
            </Button>
          </div>

          {/* Social Proof Quick */}
          <div className="animate-fade-up">
            <p className="text-sm text-hero-foreground/50 mb-4">
              Empresas que confían en nosotros
            </p>
            <div className="flex items-center justify-center gap-8 md:gap-12 opacity-60">
              {["Acme Corp", "TechFlow", "DataSync", "CloudBase", "InnovateCo"].map((company) => (
                <span
                  key={company}
                  className="text-hero-foreground font-semibold text-sm md:text-base"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
