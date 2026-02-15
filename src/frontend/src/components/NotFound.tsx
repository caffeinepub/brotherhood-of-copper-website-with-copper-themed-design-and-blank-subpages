import { Link } from '@tanstack/react-router';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex min-h-[60vh] items-center justify-center">
        <Card className="max-w-md border-2 border-primary/20 shadow-copper">
          <CardHeader className="text-center">
            <div className="mb-4 flex justify-center">
              <AlertCircle className="h-16 w-16 text-primary" />
            </div>
            <CardTitle className="font-display text-3xl">Page Not Found</CardTitle>
            <CardDescription className="text-base">
              The page you're looking for doesn't exist or has been removed.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button asChild>
              <Link to="/home">Return to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
