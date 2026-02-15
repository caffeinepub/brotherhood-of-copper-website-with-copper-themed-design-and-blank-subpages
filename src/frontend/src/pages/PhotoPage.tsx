import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera } from 'lucide-react';
import PhotoUploadGallery from '@/components/PhotoUploadGallery';

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

            {/* T-0 Junkyard-built Power Armor */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  T-0 Junkyard-built Power Armor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Main Armor Image */}
                <div className="flex justify-center">
                  <img
                    src="/assets/junkyard power armor t-2.png"
                    alt="T-0 Junkyard-built Power Armor"
                    className="max-w-full h-auto rounded-lg border-2 border-primary/20 shadow-copper"
                  />
                </div>

                {/* Description */}
                <div className="prose prose-copper max-w-none">
                  <p className="text-base text-foreground leading-relaxed">
                    The T-0 represents the Brotherhood's earliest attempts at power armor construction, 
                    cobbled together from salvaged pre-war materials and scavenged components found in 
                    the junkyards of the Texhoma wastes. Unlike the refined T-10 series, the T-0 was 
                    born of necessity rather than design—a testament to the ingenuity and resourcefulness 
                    of the first Copper-Bearers.
                  </p>
                  <p className="text-base text-foreground leading-relaxed mt-4">
                    Each T-0 suit is unique, bearing the weathered patina of rust and verdigris that 
                    tells the story of its construction. The armor's distinctive copper plating, salvaged 
                    from old electrical infrastructure and industrial machinery, provides both protection 
                    and a connection to the Copper Grid that would become central to Brotherhood technology. 
                    While crude by modern standards, the T-0 proved that even in the harshest conditions, 
                    the Brotherhood could forge strength from scrap and determination from desperation.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Upload and Gallery Section */}
            <PhotoUploadGallery />
          </div>
        </div>
      </section>
    </div>
  );
}
