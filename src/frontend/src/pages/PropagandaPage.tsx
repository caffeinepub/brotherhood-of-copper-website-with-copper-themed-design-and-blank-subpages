import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile, useSaveCallerUserProfile } from '../hooks/useQueries';
import { usePostersQuery, useUploadPosterMutation } from '../hooks/usePosterQueries';
import { createPosterImageURL, createLocalPreviewURL, revokeObjectURL } from '../utils/posterImage';
import { Upload, Loader2 } from 'lucide-react';

export default function PropagandaPage() {
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;

  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const saveProfile = useSaveCallerUserProfile();
  const { data: posters, isLoading: postersLoading } = usePostersQuery();
  const uploadPoster = useUploadPosterMutation();

  const [showProfileSetup, setShowProfileSetup] = useState(false);
  const [userName, setUserName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [displayURL, setDisplayURL] = useState<string>('/assets/generated/carry-3.png');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Show profile setup modal if authenticated but no profile
  useEffect(() => {
    if (isAuthenticated && !profileLoading && isFetched && userProfile === null) {
      setShowProfileSetup(true);
    }
  }, [isAuthenticated, profileLoading, isFetched, userProfile]);

  // Load the newest poster when available
  useEffect(() => {
    if (posters && posters.length > 0) {
      const newestPoster = posters[0]; // Backend returns reversed array, so first is newest
      
      createPosterImageURL(newestPoster)
        .then(url => {
          setDisplayURL(url);
        })
        .catch(error => {
          console.error('Failed to load poster image:', error);
          setDisplayURL('/assets/generated/carry-3.png');
        });
    } else if (posters && posters.length === 0) {
      setDisplayURL('/assets/generated/carry-3.png');
    }
  }, [posters]);

  // Clean up preview URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (previewURL) {
        revokeObjectURL(previewURL);
      }
    };
  }, [previewURL]);

  const handleProfileSave = async () => {
    if (!userName.trim()) return;
    
    try {
      await saveProfile.mutateAsync({ name: userName.trim() });
      setShowProfileSetup(false);
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file');
      return;
    }

    // Clean up previous preview
    if (previewURL) {
      revokeObjectURL(previewURL);
    }

    setSelectedFile(file);
    setUploadError(null);
    
    // Create immediate local preview
    const localURL = createLocalPreviewURL(file);
    setPreviewURL(localURL);
    setDisplayURL(localURL);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setUploadError(null);
      await uploadPoster.mutateAsync(selectedFile);
      
      // Clean up preview
      if (previewURL) {
        revokeObjectURL(previewURL);
        setPreviewURL(null);
      }
      
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error: any) {
      console.error('Upload failed:', error);
      setUploadError(error.message || 'Failed to upload poster. Please try again.');
    }
  };

  const handleImageError = async () => {
    // If direct URL fails, try to reload from bytes
    if (posters && posters.length > 0) {
      const newestPoster = posters[0];
      try {
        const url = await createPosterImageURL(newestPoster, 'image/png');
        setDisplayURL(url);
      } catch (error) {
        console.error('Failed to reload image:', error);
        setDisplayURL('/assets/generated/carry-3.png');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="border-2 border-primary/20 shadow-copper">
          <CardHeader>
            <CardTitle className="font-display text-3xl md:text-4xl text-center">
              Propaganda
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <img
              src={displayURL}
              alt="Propaganda poster"
              className="max-w-full h-auto rounded-lg shadow-lg"
              onError={handleImageError}
            />
          </CardContent>
        </Card>

        {isAuthenticated && userProfile && (
          <Card className="border-2 border-primary/20 shadow-copper">
            <CardHeader>
              <CardTitle className="font-display text-2xl">Upload Your Poster</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="poster-upload">Select Image</Label>
                <Input
                  id="poster-upload"
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  disabled={uploadPoster.isPending}
                />
              </div>

              {uploadError && (
                <div className="text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                  {uploadError}
                </div>
              )}

              {selectedFile && (
                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleUpload}
                    disabled={uploadPoster.isPending}
                    className="flex items-center gap-2"
                  >
                    {uploadPoster.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4" />
                        Upload Poster
                      </>
                    )}
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {selectedFile.name}
                  </span>
                </div>
              )}

              {postersLoading && (
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading posters...
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      <Dialog open={showProfileSetup} onOpenChange={setShowProfileSetup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to the Brotherhood</DialogTitle>
            <DialogDescription>
              Please enter your name to complete your profile setup.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && userName.trim()) {
                    handleProfileSave();
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleProfileSave}
              disabled={!userName.trim() || saveProfile.isPending}
            >
              {saveProfile.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Profile'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
