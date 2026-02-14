import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Zap } from 'lucide-react';

export default function UniformArmorVariantsByRankPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-primary/10 shadow-copper">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Uniform & Armor Variants by Rank
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed specifications of the Brotherhood's ceremonial and functional armor across all ranks and eras.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Section II: Uniform & Armor Variants by Rank */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold">II. Uniform & Armor Variants by Rank</h2>
              </div>

              {/* High Conductor */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">High Conductor</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Long copper-threaded mantle with circuitry embroidery.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>T-10A armor with ceremonial plating and engraved doctrine lines.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Copper torque worn at the neck.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Conductor */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Conductor</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Reinforced T-10A variant with division-colored trim.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Copper-etched vambraces indicating craft mastery.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Optional half-cloak showing division insignia.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Paladin-Forgemaster */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Paladin-Forgemaster</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Heavy T-10A with oversized pauldrons and forge-scarred plating.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Engraved copper filigree showing completed masterworks.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Blacksmith's hammer holstered at the hip (symbolic or functional).</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Paladin */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Paladin</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Standard T-10A with tactical engravings.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Copper-reinforced greaves and gauntlets.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ranger-style cloak for field operations.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Artificer */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Artificer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Hybrid armor: light copper-reinforced plates over a tool-laden jumpsuit.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Modular gauntlets with built-in micro-tools.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Circuit Division colors if applicable.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Knight-Ranger */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Knight-Ranger</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Lightweight copper-laminated armor optimized for mobility.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Desert cloak with Field Division insignia.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Copper-rimmed goggles for sandstorms.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Knight */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Knight</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Standardized copper-plated armor (T-1 or T-3 depending on era).</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Personalized engravings allowed after first successful salvage run.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Apprentice */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Apprentice</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Simple leather and canvas uniform with copper studs.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>No full armor; only a copper-reinforced bracer.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Copper-Bearer */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Copper-Bearer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Minimal uniform.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Required to carry a raw copper ingot at all times during training.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-8" />

            {/* Section III: Copper War–Era Rank Structure */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold">III. Copper War–Era Rank Structure</h2>
              </div>

              <p className="text-lg text-muted-foreground">
                During the Copper War, the Brotherhood becomes more militarized, more desperate, and more mythic.
              </p>

              <h3 className="font-display text-2xl font-semibold mt-8 mb-4">New / Temporary Ranks</h3>

              {/* War Conductor */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">War Conductor</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Emergency authority over all divisions.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Wears a copper-black mantle symbolizing the "storm before the signal."</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Paladin-Breaker */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Paladin-Breaker</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Shock-troop commanders specializing in anti-warlord operations.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Armor: T-10B "Breaker" variant with reinforced chest plating.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Artificer-Prime */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Artificer-Prime</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Oversees mass-production of wartime tech.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Wears a copper mask to symbolize anonymity and unity.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Signal Rangers */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Signal Rangers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Elite scouts who operate behind enemy lines.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Armor: matte copper with minimal shine to avoid detection.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Copper Conscripts */}
              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Copper Conscripts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Civilians trained rapidly to defend settlements.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Wear simple copper-patched armor and carry basic weapon.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
