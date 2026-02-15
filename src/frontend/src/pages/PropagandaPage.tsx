import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function PropagandaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Propaganda</h1>
          <p className="text-lg text-muted-foreground">
            Official Brotherhood of Copper communications and messaging
          </p>
        </div>

        <Card className="border-2 border-primary/20 shadow-copper">
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>
              This section is under construction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Check back later for Brotherhood of Copper propaganda and official communications.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
