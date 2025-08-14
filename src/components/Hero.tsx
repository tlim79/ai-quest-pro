import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  Master AI
                </span>{" "}
                <span className="relative">
                  Like a Game
                  <div className="absolute -top-2 -right-8 text-lg font-normal text-accent animate-bounce">🚀</div>
                </span>
                <br />
                <span className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
                  5 Minutes • Weekly Quests • Real Results
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Boost your team's AI skills, stay ahead of industry changes, and make smarter tool choices—fast. 
                Designed for enterprise teams who want to stay ahead in AI with minimal time commitment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group">
                  Try for Free - 1 Month
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="secondary" className="bg-secondary/80 text-secondary-foreground hover:bg-secondary border border-primary/10">
                See It in Action
              </Button>
            </div>

            {/* Trusted By Section */}
            <div className="pt-6 border-t border-border/20">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading enterprises</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-lg font-semibold text-muted-foreground">Microsoft</div>
                <div className="text-lg font-semibold text-muted-foreground">Google</div>
                <div className="text-lg font-semibold text-muted-foreground">Amazon</div>
                <div className="text-lg font-semibold text-muted-foreground">Meta</div>
                <div className="text-lg font-semibold text-muted-foreground">Tesla</div>
              </div>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-warning" />
                <span className="text-sm text-muted-foreground">Gamified Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">5 Min Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-success" />
                <span className="text-sm text-muted-foreground">Enterprise Ready</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="AI Quest Arena - Gamified AI Learning Platform"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium">5-min Quest Complete!</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium">Team Skills +15%</span>
              </div>
            </div>
            {/* Weekly Quest Ticker */}
            <div className="absolute top-1/2 -left-8 bg-primary/10 border border-primary/20 rounded-lg p-2 shadow-lg animate-float" style={{animationDelay: '2s'}}>
              <div className="text-xs text-primary font-medium">
                This Week: GPT-4 vs Claude Battle
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;