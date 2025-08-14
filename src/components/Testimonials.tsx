import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      company: "FinTechPro Pte Ltd",
      quote: "Our analysts picked up prompt engineering tips in days, not months.",
      industry: "Finance",
      rating: 5
    },
    {
      company: "LionTel Communications",
      quote: "Battle Arena keeps our engineers excited about AI. Why can't more companies provide great solutions like this?",
      industry: "Telecommunications",
      rating: 4.5
    },
    {
      company: "BlueWave Logistics",
      quote: "Even our ops team loves the weekly quests – fun and practical.",
      industry: "Logistics",
      rating: 5
    },
    {
      company: "EduNext Institute",
      quote: "Students and staff both found it engaging and eye-opening.",
      industry: "Education",
      rating: 5
    },
    {
      company: "QuantumCore Technologies",
      quote: "Best tool for understanding when to use which model.",
      industry: "Technology",
      rating: 4.5
    },
    {
      company: "GreenBank Asia",
      quote: "Security-friendly and quick to adopt in our workflows.",
      industry: "Banking",
      rating: 5
    },
    {
      company: "NovaMed Health",
      quote: "We've cut email drafting time in half with what we learned.",
      industry: "Healthcare",
      rating: 5
    },
    {
      company: "UrbanBuild Constructors",
      quote: "Our project managers now understand AI output differences.",
      industry: "Construction",
      rating: 5
    },
    {
      company: "SkyBridge Airlines",
      quote: "Perfect for training cabin crew in AI-assisted communication.",
      industry: "Aviation",
      rating: 5
    },
    {
      company: "SolarEdge Energy",
      quote: "Keeps our team up to date with the latest AI changes.",
      industry: "Energy",
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Trusted by Leading{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Enterprises
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how companies across industries are transforming their AI capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(testimonial.rating) 
                          ? "fill-warning text-warning" 
                          : i < testimonial.rating 
                            ? "fill-warning/50 text-warning" 
                            : "fill-none text-muted-foreground"
                      }`} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-primary">{testimonial.company}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.industry}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;