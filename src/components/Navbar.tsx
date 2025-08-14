import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Sword } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Sword className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI Quest Arena
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Features
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Pricing
          </Button>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <Sparkles className="w-4 h-4 mr-2" />
              Try for Free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;