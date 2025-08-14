import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Clock, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto text-center">
          <Card className="border-primary/20">
            <CardHeader className="space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-accent rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-2">
                <CardTitle className="text-3xl">Thank You!</CardTitle>
                <CardDescription className="text-lg">
                  Your request has been successfully submitted.
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>A sales rep will contact you within 3 days</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Check your email for confirmation</span>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-sm text-muted-foreground mb-6">
                  While you wait, feel free to explore what makes AI Quest Arena special.
                </p>
                
                <div className="space-y-3">
                  <Link to="/">
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group">
                      Return to Home Page
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    Learn More About Features
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 p-6 bg-muted/20 rounded-lg border border-border/50">
            <h3 className="font-semibold mb-2">What Happens Next?</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>1. Our sales team will review your information</p>
              <p>2. We'll schedule a personalized demo</p>
              <p>3. Set up your free month trial</p>
              <p>4. Get your team started with AI Quest Arena</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;