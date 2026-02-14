import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function PhotoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-primary/10 shadow-copper">
              <Camera className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Photo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A curated look at Brotherhood artifacts and moments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* T-10 Power Armor Photo */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  The first T-10 Copper Based Power Armor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Main Armor Image */}
                <div className="flex justify-center">
                  <img
                    src="/assets/the first copper plated power armor t-10.png"
                    alt="The first T-10 Copper Based Power Armor"
                    className="max-w-full h-auto rounded-lg border-2 border-primary/20 shadow-copper"
                  />
                </div>

                {/* Accessories Section */}
                <div className="space-y-6 pt-6 border-t-2 border-primary/20">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Accessories
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Calibrated Shocks */}
                    <div className="space-y-3">
                      <h4 className="font-display text-lg font-medium text-foreground">
                        Calibrated Shocks
                      </h4>
                      <div className="flex justify-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <img
                          src="/assets/calibrated shocks for the t-10.png"
                          alt="Calibrated Shocks for T-10 Power Armor"
                          className="max-w-full h-auto rounded-md"
                        />
                      </div>
                    </div>

                    {/* Tesla Bracers */}
                    <div className="space-y-3">
                      <h4 className="font-display text-lg font-medium text-foreground">
                        Tesla Bracers
                      </h4>
                      <div className="flex justify-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <img
                          src="/assets/BCO.258a6932-241b-441a-a1af-7ad2c9ef068a.png"
                          alt="Tesla Bracers for T-10 Power Armor"
                          className="max-w-full h-auto rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
