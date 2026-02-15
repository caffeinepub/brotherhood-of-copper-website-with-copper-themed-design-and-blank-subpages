import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/boclogo.png)' }}
      />
      
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <Button 
          size="lg" 
          className="shadow-copper text-lg px-8 py-6 font-display font-bold"
          onClick={() => navigate({ to: '/home' })}
        >
          Enter the Brotherhood
        </Button>
      </div>
    </div>
  );
}
