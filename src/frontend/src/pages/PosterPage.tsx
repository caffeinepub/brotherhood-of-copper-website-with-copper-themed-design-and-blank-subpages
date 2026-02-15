import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

export default function PosterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <Image className="h-16 w-16 text-primary" />
        </div>
        <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Brotherhood Posters
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Recruitment and propaganda materials from the Brotherhood of Copper
        </p>
      </div>

      {/* Poster Display */}
      <div className="mx-auto max-w-4xl">
        <Card className="overflow-hidden border-2 border-primary/20 shadow-copper">
          <CardContent className="p-6">
            <img
              src="/assets/carry-2.png"
              alt="Carry the Signal - Brotherhood of Copper recruitment poster featuring armored soldier with lightning bolt emblem"
              className="h-auto w-full rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
