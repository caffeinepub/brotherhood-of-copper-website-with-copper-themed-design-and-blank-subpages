import { Shield, Swords, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Banner Image */}
            <div className="mb-8 w-full max-w-3xl mx-auto">
              <img 
                src="/assets/generated/brotherhood of copper banner.png" 
                alt="The Brotherhood of Copper - Official emblem featuring gear and lightning bolt symbols"
                className="w-full h-auto rounded-lg shadow-copper"
                loading="eager"
              />
            </div>
            
            <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-primary/10 shadow-copper">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Brotherhood of Copper
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              United in strength, forged in honor. We are the guardians of tradition, 
              bound by the ancient metal that gives us our name.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="shadow-copper">
                <Link to="/lore">Explore Uniform & Armor Variants</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/history">Our History</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-copper">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-2">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display">Our Mission</CardTitle>
                <CardDescription>
                  Upholding the ancient values of courage, loyalty, and brotherhood
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-copper">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-2">
                  <Swords className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display">
                  <Link to="/ranks" className="hover:text-primary transition-colors">
                    Ranks
                  </Link>
                </CardTitle>
                <CardDescription>
                  A structured hierarchy built on merit and dedication
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-copper">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display">
                  <Link to="/divisions" className="hover:text-primary transition-colors">
                    Divisions
                  </Link>
                </CardTitle>
                <CardDescription>
                  Specialized units working together toward common goals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-copper">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-display">
                  <Link to="/lore" className="hover:text-primary transition-colors">
                    Uniform & Armor Variants
                  </Link>
                </CardTitle>
                <CardDescription>
                  Detailed specifications of our ceremonial and combat attire
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
              Forged in Unity
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center leading-relaxed">
                The Brotherhood of Copper stands as a testament to the enduring power of unity 
                and shared purpose. Like the metal from which we take our name—strong, resilient, 
                and timeless—we are bound together by unbreakable bonds of loyalty and honor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-copper">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Join Our Legacy
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover the rich history and traditions that have shaped the Brotherhood 
                  of Copper through the ages.
                </p>
                <Button asChild size="lg" className="shadow-copper">
                  <Link to="/history">Learn Our History</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <p className="text-[14px] text-muted-foreground text-center max-w-4xl mx-auto">
            This is a 100 percent fictional organization that isnt in fallout or any games of fallout. all fallout works are copyrighted and owned by Bethesda Game Studios.
          </p>
        </div>
      </section>
    </div>
  );
}
