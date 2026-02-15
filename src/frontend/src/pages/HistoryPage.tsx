import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Zap, BookOpen } from 'lucide-react';
import { useEffect } from 'react';

interface HistorySection {
  id: string;
  numeral: string;
  title: string;
  content: React.ReactNode;
}

const historySections: HistorySection[] = [
  {
    id: 'section-i',
    numeral: 'I',
    title: 'Texhoma: The City Split by a Line (2105)',
    content: (
      <>
        <p>
          Texhoma is a strange place even before the Copper Age begins.
        </p>
        <p>
          Half in Texas, half in Oklahoma, the pre‑war city was built on top of a sprawling subterranean research complex known only in scattered records as The Copper Order Facility. After the bombs, the surface city becomes a fractured frontier settlement — part trading post, part scrapyard, part storm shelter.
        </p>
        <p>
          But beneath it, the old world sleeps.
        </p>
        <p>
          The locals know the underground ruins exist, but they avoid them.<br />
          The walls hum.<br />
          The floors vibrate.<br />
          Sometimes the lights flicker even though no power runs through the lines.
        </p>
        <p className="font-semibold text-foreground">
          Texhoma is a city waiting for someone to wake it up.
        </p>
      </>
    ),
  },
  {
    id: 'section-ii',
    numeral: 'II',
    title: 'Colt Mercer — The One the Grid Recognizes',
    content: (
      <>
        <p>
          Colt grows up on the Texas side of Texhoma, raised by scavengers who treat technology like a dangerous animal: useful, but liable to bite. He's always been different — drawn to machines, able to "feel" when a circuit is about to fail, able to coax life out of dead terminals.
        </p>
        <p>
          In 2105, a supercharged dust storm slams into Texhoma.<br />
          Lightning strikes the old Copper Order Facility.<br />
          The underground grid reactivates for the first time in two centuries.
        </p>
        <p>
          Colt is caught in the surge.
        </p>
        <p>
          Instead of killing him, the energy synchronizes with him.<br />
          The dormant network beneath Texhoma — the Copper Grid — imprints on him, recognizing him as a compatible operator.
        </p>
        <p>
          He becomes the first person since the Great War who can interpret its signals.
        </p>
        <p className="font-semibold text-foreground">
          This is the moment the Copper Age begins.
        </p>
      </>
    ),
  },
  {
    id: 'section-iii',
    numeral: 'III',
    title: 'The Revelation Beneath Texhoma',
    content: (
      <>
        <p>
          Guided by visions of circuitry and echoing memories from the Grid, Colt descends into the Copper Order Facility. What he finds is not a bunker — it's a cathedral of technology:
        </p>
        <ul className="space-y-2 ml-6">
          <li className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Copper conduits running like veins through the walls</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Massive generators fused with unknown alloys</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span>A central archive filled with fragmented pre‑war data</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span>A dormant armory containing experimental power armor frames</span>
          </li>
        </ul>
        <p>
          The Grid shows him flashes of a pre‑war contingency:<br />
          The Copper War, a predicted conflict between future factions who would fight for control of the Grid's energy.
        </p>
        <p>
          The prophecy is incomplete, corrupted, but one line is clear:
        </p>
        <p className="italic text-foreground border-l-4 border-primary pl-4">
          "The Order will rise again when the world is ready to be rebuilt."
        </p>
        <p>
          Colt doesn't want to lead anything.<br />
          But Texhoma needs someone who understands the storm beneath their feet.
        </p>
      </>
    ),
  },
  {
    id: 'section-iv',
    numeral: 'IV',
    title: 'The First Followers — The Texhoma Seekers',
    content: (
      <>
        <p>
          Word spreads fast in a small frontier town.
        </p>
        <p>
          A kid survived a copper storm.<br />
          A kid walked into the forbidden ruins and came back alive.<br />
          A kid can make the old machines obey.
        </p>
        <p>
          Some fear him.<br />
          Some want to use him.<br />
          A few choose to follow him.
        </p>
        <p>
          These first followers — engineers, ranchers, ex‑militia, and refugees — become the Texhoma Seekers, the earliest form of the Brotherhood of Copper. They help Colt explore the ruins, decode the archives, and restore fragments of the Grid.
        </p>
        <p>
          They are not soldiers yet.<br />
          Not an Order.<br />
          Just people who believe Texhoma can be more than a ruin.
        </p>
      </>
    ),
  },
  {
    id: 'section-v',
    numeral: 'V',
    title: 'The First Armor: T‑1 Copper Frame',
    content: (
      <>
        <p>
          In a sealed chamber beneath the facility, Colt discovers a rusted experimental power armor frame fused with copper wiring. It's incomplete, unstable, and dangerous.
        </p>
        <p>
          He rebuilds it anyway.
        </p>
        <p>
          Using scavenged plating, reforged copper, and the Grid's guidance, Colt creates the T‑1 Power Armor — the first copper-forged suit. It's crude, asymmetrical, and heavy, but it works.
        </p>
        <p>
          When Colt emerges from the underground wearing the T‑1, Texhoma sees something it hasn't seen in generations:
        </p>
        <p className="font-semibold text-foreground">
          A protector.
        </p>
        <p>
          This moment becomes the symbolic birth of the Brotherhood of Copper.
        </p>
      </>
    ),
  },
  {
    id: 'section-vi',
    numeral: 'VI',
    title: 'The First Enemy — The Iron Reclaimers',
    content: (
      <>
        <p>
          The reactivation of the Copper Grid sends a signal across the region.<br />
          One faction hears it: The Iron Reclaimers, a brutal technocratic warband operating out of the Oklahoma wastes.
        </p>
        <p>
          They believe all advanced technology belongs to them.<br />
          They believe the Copper Grid is a weapon.<br />
          They believe Texhoma is sitting on their future.
        </p>
        <p>
          Their scouts arrive in late 2105.<br />
          Their raids begin soon after.
        </p>
        <p>
          The Seekers fight back, but they're outnumbered and outgunned.<br />
          Texhoma becomes a battleground.
        </p>
        <p className="font-semibold text-foreground">
          These early clashes will later be remembered as the opening sparks of the Copper War.
        </p>
      </>
    ),
  },
  {
    id: 'section-vii',
    numeral: 'VII',
    title: 'The Founding of the Brotherhood of Copper (Late 2105)',
    content: (
      <>
        <p>
          After the Reclaimers burn a Texhoma outpost and kill several Seekers, Colt realizes something:
        </p>
        <p>
          Knowledge alone won't save Texhoma.<br />
          The Grid won't protect anyone unless someone chooses to wield it.
        </p>
        <p>
          So Colt writes the first tenets of the Brotherhood of Copper, carved into a copper plate salvaged from the facility:
        </p>
        <ul className="space-y-2 ml-6">
          <li className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span className="font-semibold text-foreground">Protect Texhoma.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span className="font-semibold text-foreground">Preserve the Copper Grid.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span className="font-semibold text-foreground">Rebuild the world through craft and discipline.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span className="font-semibold text-foreground">Knowledge is a current — it must flow.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span className="font-semibold text-foreground">Strength is a circuit — every link matters.</span>
          </li>
        </ul>
        <p>
          The Seekers swear their oaths.<br />
          The Copper Order Facility becomes their headquarters.<br />
          Texhoma becomes their fortress-city.
        </p>
        <p className="font-semibold text-foreground">
          The Brotherhood of Copper is born.
        </p>
      </>
    ),
  },
  {
    id: 'section-viii',
    numeral: 'VIII',
    title: 'The Final Moment of 2105 — The Copper Sky',
    content: (
      <>
        <p>
          The year ends with a storm unlike any in living memory.<br />
          The sky over Texhoma glows copper for hours, lightning dancing in spirals that mirror the Grid's circuitry.
        </p>
        <p>
          Colt stands atop the ruined Texhoma water tower, wearing the T‑1 armor, watching the storm pulse in the same rhythm as the Grid beneath the city.
        </p>
        <p>
          He knows the prophecy is real.<br />
          He knows the Copper War is coming.<br />
          And he knows Texhoma will be the center of it.
        </p>
        <p className="font-semibold text-foreground">
          The world is waking up.<br />
          And it's looking to Texhoma.
        </p>
      </>
    ),
  },
];

export default function HistoryPage() {
  // Handle hash fragment navigation on mount and hash change
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Small delay to ensure layout is complete
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Scroll on initial load
    scrollToSection();

    // Listen for hash changes
    window.addEventListener('hashchange', scrollToSection);
    return () => window.removeEventListener('hashchange', scrollToSection);
  }, []);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

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
              The Birth of the Brotherhood
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Texhoma, 2105 — Where the Copper Age Began
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Table of Contents */}
            <Card className="border-2 border-primary/20 shadow-copper bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <CardTitle className="font-display text-2xl">
                    Table of Contents
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {historySections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => handleTocClick(e, section.id)}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <span className="font-display text-lg font-semibold text-primary min-w-[2rem]">
                        {section.numeral}.
                      </span>
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {section.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            {/* History Sections */}
            {historySections.map((section) => (
              <Card
                key={section.id}
                id={section.id}
                className="border-2 border-primary/20 shadow-copper scroll-mt-24"
              >
                <CardHeader>
                  <CardTitle className="font-display text-2xl">
                    {section.numeral}. {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  {section.content}
                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
