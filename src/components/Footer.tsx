import { Link } from "react-router-dom";
import { Sword, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Sword className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Quest Arena
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              The gamified way to master AI skills in just 5 minutes a week. 
              Perfect for enterprises looking to upskill their teams.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <div className="space-y-2">
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Questboard
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Battle Arena
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Progression
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                What's New
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2">
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Enterprise
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Security
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:sales@AIquest.org" className="text-muted-foreground hover:text-primary transition-colors">
                  sales@AIquest.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Singapore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 AI Quest Arena. All rights reserved. Built for the future of AI learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;