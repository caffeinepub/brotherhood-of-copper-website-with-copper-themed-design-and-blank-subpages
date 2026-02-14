import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Zap } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-primary/10 shadow-copper">
              <Zap className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Dawn of Copper (2105)
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Year Zero of the Copper Age
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Section I */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  I. The World Before the Spark
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  By 2105, the Midwest is a graveyard of half-lit ruins and flickering power grids. The Great Plains storms have intensified, turning the region into a corridor of electrical chaos. Most settlements cling to scavenged tech, terrified of anything more advanced than a hand-crank generator.
                </p>
                <p>
                  But beneath the cracked earth of old Missouri, something stirs.
                </p>
                <p>
                  A dormant network of pre-war copper conduits — part of an abandoned energy experiment — begins to hum again. Locals call it the Copper Grid, a mythic relic of a world that once believed it could outsmart entropy.
                </p>
                <p>
                  Most fear it.<br />
                  A few worship it.<br />
                  One will understand it.
                </p>
              </CardContent>
            </Card>

            {/* Section II */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  II. Colt Mercer — The First to Hear the Grid
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Colt Mercer is 19 in 2105, a scavenger born into a world that has forgotten its own circuitry. He's not a soldier, not a scholar — just a kid with a knack for machines and a stubborn refusal to accept that the world is meant to stay broken.
                </p>
                <p>
                  When a storm surge hits the ruins of the old St. Louis Research Annex, Colt is caught in the blast. Instead of killing him, the surge synchronizes with the dormant Copper Grid beneath the city.
                </p>
                <p>
                  For the first time in two centuries, the Grid speaks — not in words, but in patterns, heat, and memory echoes.
                </p>
                <p>
                  Colt becomes the first human in generations to interpret its signals.
                </p>
                <p className="font-semibold text-foreground">
                  This is the moment the Copper Age begins.
                </p>
              </CardContent>
            </Card>

            {/* Section III */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  III. The Prophecy of the Copper War
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The Grid reveals fragments of a pre-war contingency plan:<br />
                  A conflict the old world feared but never saw — the Copper War, a theoretical civil war between factions who would one day fight over control of the Grid's energy.
                </p>
                <p>
                  The prophecy is incomplete, corrupted, and dangerous.<br />
                  But one thing is clear:
                </p>
                <p className="italic text-foreground border-l-4 border-primary pl-4">
                  "The one who restores the Grid will forge the Order that decides the fate of the Wastes."
                </p>
                <p>
                  Colt doesn't want to be a prophet.<br />
                  He just wants to keep people alive.
                </p>
                <p>
                  But the Wastes don't care what he wants.
                </p>
              </CardContent>
            </Card>

            {/* Section IV */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  IV. The First Followers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Word spreads quickly: a young scavenger survived a copper storm and walked out glowing with static charge. Settlers, raiders, and technomancers all want a piece of him.
                </p>
                <p>
                  But a small group of wanderers — engineers, ex-mercs, and refugees — choose to follow him instead. They see in Colt not a messiah, but a leader who refuses to abandon hope.
                </p>
                <p>
                  They call themselves the Copper Seekers.
                </p>
                <p>
                  They are not yet a Brotherhood.<br />
                  Not yet an Order.<br />
                  Just a handful of people who believe the world can be rebuilt.
                </p>
              </CardContent>
            </Card>

            {/* Section V */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  V. The First Armor: T‑1 Copper Frame
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  In late 2105, Colt and the Seekers uncover a rusted pre-war power armor frame in a junkyard vault. It's incomplete, unstable, and fused with copper wiring from the Grid's awakening.
                </p>
                <p>
                  Colt rebuilds it by hand.
                </p>
                <p>
                  This becomes the T‑1 Power Armor, the first copper-forged suit — crude, patchwork, but symbolic. It marks the moment the Seekers become something more.
                </p>
                <p className="font-semibold text-foreground">
                  The Wastes take notice.
                </p>
              </CardContent>
            </Card>

            {/* Section VI */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  VI. The First Enemy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The reactivation of the Grid draws the attention of a rising warlord faction: The Iron Reclaimers, a brutal group who believe all technology must be seized and weaponized.
                </p>
                <p>
                  They see the Copper Grid as the key to domination.
                </p>
                <p>
                  They see Colt as a threat.
                </p>
                <p>
                  The first skirmishes begin in winter 2105 — small, desperate, and bloody. These battles will later be remembered as the opening sparks of the Copper War.
                </p>
              </CardContent>
            </Card>

            {/* Section VII */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  VII. The Birth of the Brotherhood (Late 2105)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  After the Reclaimers burn a settlement that sheltered the Seekers, Colt realizes something:
                </p>
                <p>
                  Hope alone won't save anyone.<br />
                  The Wastes need structure.<br />
                  Discipline.<br />
                  A code.
                </p>
                <p>
                  And so, in the ruins of an old electrical substation, Colt drafts the first tenets of what will become the Brotherhood of Copper:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-semibold text-foreground">Preserve the Grid.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-semibold text-foreground">Protect the innocent.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-semibold text-foreground">Rebuild the world, one circuit at a time.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-semibold text-foreground">Knowledge is a current — it must flow.</span>
                  </li>
                </ul>
                <p>
                  The Seekers swear their oaths.<br />
                  The Copper Age officially begins.
                </p>
              </CardContent>
            </Card>

            {/* Section VIII */}
            <Card className="border-2 border-primary/20 shadow-copper">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  VIII. The Final Moment of 2105
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The year ends with a storm unlike any before it — a copper-charged supercell that lights the sky for hours.
                </p>
                <p>
                  Colt stands in the doorway of the substation, wearing the T‑1 armor, watching the sky pulse with the same energy that changed his life.
                </p>
                <p>
                  He knows the prophecy is real.<br />
                  He knows the war is coming.<br />
                  And he knows the Brotherhood of Copper must be ready.
                </p>
                <p className="font-semibold text-foreground">
                  The world is waking up.<br />
                  And it's hungry.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
