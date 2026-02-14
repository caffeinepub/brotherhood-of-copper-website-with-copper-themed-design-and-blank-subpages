import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Zap, Wrench, Compass, Users, BookOpen, Hammer, Scroll } from 'lucide-react';

export default function RanksPage() {
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
              Ranks & Hierarchy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Brotherhood of Copper's structure is built on merit, craft mastery, and dedication to our sacred mission.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Leadership Ranks */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold">A. Leadership Ranks</h2>
              </div>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    High Conductor
                  </CardTitle>
                  <CardDescription className="text-base">
                    Equivalent to Elder, but more ceremonial and craft-focused.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Oversees doctrine, archives, and long-term strategy.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Must be a master of at least two crafts (e.g., metallurgy + circuitry).</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Wears a copper torque engraved with the Order's founding lines.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Conductor
                  </CardTitle>
                  <CardDescription className="text-base">
                    Senior leadership, each responsible for a division.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-semibold text-foreground">Divisions include:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Forge Division</strong> (armor & weapons)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Circuit Division</strong> (electronics, comms, energy)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Field Division</strong> (scouts, rangers, tacticians)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Archive Division</strong> (knowledge, history, schematics)</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground italic mt-4">
                    Conductors are chosen by merit, not age.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-8" />

            {/* Command Ranks */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold">B. Command Ranks</h2>
              </div>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Paladin-Forgemaster
                  </CardTitle>
                  <CardDescription className="text-base">
                    Elite warriors who also serve as master craftsmen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Lead field operations.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Train new armorers and engineers.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Required to maintain a personal suit of T-series Copper Armor.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Paladin
                  </CardTitle>
                  <CardDescription className="text-base">
                    Veteran fighters and squad leaders.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Veteran fighters.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Squad leaders.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Expected to mentor lower ranks in both combat and craft.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-8" />

            {/* Specialist Ranks */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold">C. Specialist Ranks</h2>
              </div>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-2">
                    <Wrench className="h-6 w-6 text-primary" />
                    Artificer
                  </CardTitle>
                  <CardDescription className="text-base">
                    Unique to the Brotherhood of Copper.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Engineers, metallurgists, circuit-smiths.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Equal in authority to Knights.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Can override a Knight's order if it endangers tech preservation.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-2">
                    <Compass className="h-6 w-6 text-primary" />
                    Knight-Ranger
                  </CardTitle>
                  <CardDescription className="text-base">
                    Texahoma twist — a hybrid of Knight + frontier scout.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Skilled marksmen, trackers, and survivalists.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Often operate in small teams across the plains.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Wear lighter copper-reinforced armor.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Knight
                  </CardTitle>
                  <CardDescription className="text-base">
                    Standard combatants and gear maintainers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Standard combatants.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Expected to maintain their own gear.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Must complete a "Copper Trial" — forging a functional tool or weapon.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-8" />

            {/* Initiate Ranks */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold">D. Initiate Ranks</h2>
              </div>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Apprentice
                  </CardTitle>
                  <CardDescription className="text-base">
                    Learning the craft under experienced masters.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Learns a craft under an Artificer or Paladin-Forgemaster.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Not permitted to wear full armor.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-2">
                    <Hammer className="h-6 w-6 text-primary" />
                    Copper-Bearer
                  </CardTitle>
                  <CardDescription className="text-base">
                    The foundation of the Brotherhood.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Lowest rank.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Carries raw copper ingots during training as a symbol of burden and potential.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Must complete a salvage run before promotion.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-8" />

            {/* Internal Regulations & Culture */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Scroll className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold">IV. Internal Regulations & Culture</h2>
              </div>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">1. The Copper Ledger</CardTitle>
                  <CardDescription className="text-base">
                    Every member keeps a personal logbook:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Repairs made</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Salvage recovered</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Lessons learned</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Failures and how they were corrected</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground italic mt-4">
                    These ledgers are archived upon death — a living history of the Order.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">2. The Rite of Tempering</CardTitle>
                  <CardDescription className="text-base">
                    Before promotion, a member must:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Repair a broken piece of tech</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Forge a copper component</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Demonstrate emotional discipline under pressure</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground italic mt-4">
                    This ensures the Brotherhood produces creators, not destroyers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 shadow-copper">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">3. The Law of Resonance</CardTitle>
                  <CardDescription className="text-base">
                    Conflicts between members must be resolved through:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Mediation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Craft challenge (forge-off)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Tactical simulation</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground italic mt-4 font-semibold">
                    Violence between members is forbidden.
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
