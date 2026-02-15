import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function PosterPage() {
  const posters = [
    {
      src: '/assets/generated/poster-1.dim_1200x1800.png',
      alt: 'Brotherhood of Copper recruitment poster featuring iconic copper armor',
    },
    {
      src: '/assets/generated/poster-2.dim_1200x1800.png',
      alt: 'Brotherhood of Copper propaganda poster showcasing unity and strength',
    },
    {
      src: '/assets/generated/poster-3.dim_1200x1800.png',
      alt: 'Brotherhood of Copper historical poster commemorating the founding',
    },
    {
      src: '/assets/thecopperwar.png',
      alt: 'The Copper War Is Coming',
    },
    {
      src: '/assets/craft.png',
      alt: 'Craft. Protect. Rebuild.',
    },
    {
      src: '/assets/thewastes.png',
      alt: 'The Wastes Need Makers',
    },
    {
      src: '/assets/carry.png',
      alt: 'Carry the Signal',
    },
    {
      src: '/assets/standwith.png',
      alt: 'Stand With the',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-primary/10 shadow-copper">
              <Image className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Posters
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Iconic propaganda and historical posters from the Brotherhood of Copper.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Poster Gallery */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posters.map((poster, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/20 shadow-copper hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                      <img
                        src={poster.src}
                        alt={poster.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
