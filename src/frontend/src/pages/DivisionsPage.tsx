import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Hammer, BookOpen, Compass, Zap, Key } from 'lucide-react';

export default function DivisionsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-primary/10 shadow-copper">
              <Hammer className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Divisions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized branches of the Brotherhood, each dedicated to preserving and advancing the craft of copper.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Forge Division */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-3xl flex items-center gap-3">
                  <Hammer className="h-8 w-8 text-primary" />
                  Forge Division
                </CardTitle>
                <CardDescription className="text-lg">
                  (Armorers, Weaponsmiths)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <img 
                    src="/assets/forgedivison.png" 
                    alt="Forge Division" 
                    className="w-full max-w-md rounded-lg border-2 border-primary/20 shadow-copper"
                  />
                </div>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                  The Forge Division stands as the heart of the Brotherhood's craft, where master armorers and weaponsmiths 
                  shape copper into instruments of protection and power. Through fire and hammer, they preserve the ancient 
                  techniques while forging the future of our order.
                </p>
              </CardContent>
            </Card>

            {/* Archive Division */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-3xl flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                  Archive Division
                </CardTitle>
                <CardDescription className="text-lg">
                  (Scribes, Historians, Analysts)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <img 
                    src="/assets/archivedivison.png" 
                    alt="Archive Division" 
                    className="w-full max-w-md rounded-lg border-2 border-primary/20 shadow-copper"
                  />
                </div>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                  The Archive Division serves as the memory and wisdom of the Brotherhood, where scribes meticulously record 
                  our history, historians preserve our traditions, and analysts study the patterns of our craft. Through ink 
                  and parchment, they ensure that no knowledge is lost to time.
                </p>
              </CardContent>
            </Card>

            {/* Field Division */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-3xl flex items-center gap-3">
                  <Compass className="h-8 w-8 text-primary" />
                  Field Division
                </CardTitle>
                <CardDescription className="text-lg">
                  (Scouts, Rangers, Tacticians)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <img 
                    src="/assets/fielddivison.png" 
                    alt="Field Division" 
                    className="w-full max-w-md rounded-lg border-2 border-primary/20 shadow-copper"
                  />
                </div>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                  The Field Division serves as the eyes and shield of the Brotherhood, where scouts survey distant lands, 
                  rangers patrol our territories, and tacticians plan our strategic movements. Through vigilance and cunning, 
                  they ensure the safety and expansion of our order.
                </p>
              </CardContent>
            </Card>

            {/* Circuit Division */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-3xl flex items-center gap-3">
                  <Zap className="h-8 w-8 text-primary" />
                  Circuit Division
                </CardTitle>
                <CardDescription className="text-lg">
                  (Engineers, Energy Techs, Comms)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <img 
                    src="/assets/circuitdivison.png" 
                    alt="Circuit Division" 
                    className="w-full max-w-md rounded-lg border-2 border-primary/20 shadow-copper"
                  />
                </div>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                  The Circuit Division harnesses the power of copper's conductivity, where engineers design intricate systems, 
                  energy technicians channel the flow of power, and communications specialists maintain the vital connections 
                  that bind our Brotherhood. Through wire and current, they bring light and unity to our order.
                </p>
              </CardContent>
            </Card>

            {/* Custodian Division */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-3xl flex items-center gap-3">
                  <Key className="h-8 w-8 text-primary" />
                  Custodian Division
                </CardTitle>
                <CardDescription className="text-lg">
                  (Pre-War Machine Interface Specialists)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <img 
                    src="/assets/CUSTODIANDIVISON.png" 
                    alt="Custodian Division" 
                    className="w-full max-w-md rounded-lg border-2 border-primary/20 shadow-copper"
                  />
                </div>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                  The Custodian Division guards the secrets of the old world, where specialists maintain and interface with 
                  pre-war machines, unlocking the forgotten knowledge encoded in ancient systems. Through careful study and 
                  reverent preservation, they bridge the gap between past and present, ensuring the Brotherhood's access to 
                  the technological wisdom of ages long past.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
