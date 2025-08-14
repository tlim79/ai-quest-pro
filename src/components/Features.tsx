import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scroll, Swords, TrendingUp, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Scroll,
      title: "Questboard",
      description: "Curated challenges highlighting new LLM features",
      details: "Weekly quests that teach you the latest AI capabilities through hands-on practice",
      badge: "New Features"
    },
    {
      icon: Swords,
      title: "Battle Arena",
      description: "Compare two models side-by-side and vote a winner",
      details: "Understand which model excels at what tasks through direct comparison",
      badge: "Compare Models"
    },
    {
      icon: TrendingUp,
      title: "Progression Lite",
      description: "Earn XP, badges, and streak rewards",
      details: "Gamified learning that keeps you motivated and tracks your AI mastery",
      badge: "Gamified"
    },
    {
      icon: Sparkles,
      title: "What's New",
      description: "3 bullets each week on notable releases",
      details: "Stay informed about the latest AI developments without information overload",
      badge: "Weekly Updates"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Master AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four powerful features designed to keep you ahead in the rapidly evolving AI landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-border/50 hover:border-primary/20 transition-colors group">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.details}
                </p>
              </CardContent>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;