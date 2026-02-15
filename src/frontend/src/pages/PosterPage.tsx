import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Image, Upload, AlertCircle, Loader2 } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile, useSaveCallerUserProfile, useGetPoster, useUploadPoster } from '../hooks/useQueries';
import { ExternalBlob } from '../backend';

export default function PosterPage() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  const { data: userProfile, isLoading: profileLoading, isFetched: profileFetched } = useGetCallerUserProfile();
  const saveProfile = useSaveCallerUserProfile();
  const { data: posterBlob, isLoading: posterLoading } = useGetPoster();
  const uploadPoster = useUploadPoster();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [posterImageUrl, setPosterImageUrl] = useState<string | null>(null);
  const [showProfileSetup, setShowProfileSetup] = useState(false);
  const [profileName, setProfileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Show profile setup modal if authenticated but no profile
  useEffect(() => {
    if (isAuthenticated && !profileLoading && profileFetched && userProfile === null) {
      setShowProfileSetup(true);
    }
  }, [isAuthenticated, profileLoading, profileFetched, userProfile]);

  // Load poster image from backend
  useEffect(() => {
    if (posterBlob) {
      const url = posterBlob.getDirectURL();
      setPosterImageUrl(url);
    } else {
      setPosterImageUrl(null);
    }
  }, [posterBlob]);

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.match(/^image\/(png|jpeg|jpg)$/)) {
      setUploadError('Please select a PNG or JPG image file.');
      return;
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setUploadError('File size must be less than 10MB.');
      return;
    }

    setSelectedFile(file);
    setUploadError(null);

    // Create preview URL
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setUploadError(null);
      setUploadProgress(0);

      // Read file as bytes
      const arrayBuffer = await selectedFile.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);

      // Create ExternalBlob
      const blob = ExternalBlob.fromBytes(bytes);

      // Upload with progress tracking
      await uploadPoster.mutateAsync({
        blob,
        onProgress: (percentage) => {
          setUploadProgress(percentage);
        },
      });

      // Clear selection after successful upload
      setSelectedFile(null);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setUploadProgress(0);
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error instanceof Error ? error.message : 'Failed to upload poster. Please try again.');
      setUploadProgress(0);
    }
  };

  const handleProfileSave = async () => {
    if (!profileName.trim()) return;

    try {
      await saveProfile.mutateAsync({ name: profileName.trim() });
      setShowProfileSetup(false);
      setProfileName('');
    } catch (error) {
      console.error('Profile save error:', error);
    }
  };

  const displayImageUrl = posterImageUrl || '/assets/carry-2.png';
  const displayImageAlt = posterImageUrl
    ? 'User uploaded Brotherhood of Copper poster'
    : 'Carry the Signal - Brotherhood of Copper recruitment poster featuring armored soldier with lightning bolt emblem';

  const isUploading = uploadPoster.isPending;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Profile Setup Modal */}
      <Dialog open={showProfileSetup} onOpenChange={setShowProfileSetup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to the Brotherhood</DialogTitle>
            <DialogDescription>Please enter your name to complete your profile setup.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="profile-name">Name</Label>
            <Input
              id="profile-name"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              placeholder="Enter your name"
              className="mt-2"
              disabled={saveProfile.isPending}
            />
          </div>
          <DialogFooter>
            <Button onClick={handleProfileSave} disabled={!profileName.trim() || saveProfile.isPending}>
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

      {/* Upload Section - Only for authenticated users */}
      {isAuthenticated && userProfile && (
        <div className="mx-auto mb-8 max-w-4xl">
          <Card className="border-2 border-primary/20 shadow-copper">
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Upload Your Poster</h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="poster-upload" className="mb-2 block">
                    Select Image (PNG or JPG, max 10MB)
                  </Label>
                  <Input
                    ref={fileInputRef}
                    id="poster-upload"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={handleFileSelect}
                    disabled={isUploading}
                    className="cursor-pointer"
                  />
                </div>

                {selectedFile && previewUrl && (
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-sm font-medium">Preview:</p>
                      <img
                        src={previewUrl}
                        alt="Preview of selected poster image"
                        className="h-auto max-h-96 w-full rounded-lg object-contain"
                      />
                    </div>

                    {isUploading && uploadProgress > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Uploading: {uploadProgress}%</p>
                        <Progress value={uploadProgress} className="w-full" />
                      </div>
                    )}

                    <Button onClick={handleUpload} disabled={isUploading} className="w-full sm:w-auto">
                      {isUploading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="mr-2 h-4 w-4" />
                          Upload Poster
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {uploadError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{uploadError}</AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Login Prompt for Guests */}
      {!isAuthenticated && (
        <div className="mx-auto mb-8 max-w-4xl">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <div className="flex items-center justify-between">
                <span>Log in to upload your own poster</span>
                <Button onClick={login} disabled={isLoggingIn} size="sm" className="ml-4">
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    'Log In'
                  )}
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Poster Display */}
      <div className="mx-auto max-w-4xl">
        <Card className="overflow-hidden border-2 border-primary/20 shadow-copper">
          <CardContent className="p-6">
            {posterLoading ? (
              <div className="flex h-96 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <img src={displayImageUrl} alt={displayImageAlt} className="h-auto w-full rounded-lg" />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Additional Static Poster Sample */}
      <div className="mx-auto mt-8 max-w-4xl">
        <h2 className="mb-4 text-center text-2xl font-semibold">Additional Recruitment Materials</h2>
        <Card className="overflow-hidden border-2 border-primary/20 shadow-copper">
          <CardContent className="p-6">
            <img
              src="/assets/craft-1.png"
              alt="Craft, Protect, Rebuild - Brotherhood of Copper recruitment poster featuring armored soldier with copper gear emblem"
              className="h-auto w-full rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
