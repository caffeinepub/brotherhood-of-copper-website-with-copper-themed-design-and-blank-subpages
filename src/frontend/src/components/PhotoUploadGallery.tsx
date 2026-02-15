import { useState, useEffect } from 'react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { usePostersQuery, useUploadPosterMutation } from '../hooks/usePosterQueries';
import { createPosterImageURL, createLocalPreviewURL, revokeObjectURL } from '../utils/posterImage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, Image as ImageIcon, AlertCircle, Loader2 } from 'lucide-react';

export default function PhotoUploadGallery() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  const { data: posters, isLoading: postersLoading, error: postersError } = usePostersQuery();
  const uploadMutation = useUploadPosterMutation();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [posterURLs, setPosterURLs] = useState<string[]>([]);

  // Handle file selection and preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Revoke previous preview URL
      if (previewURL) {
        revokeObjectURL(previewURL);
      }
      setSelectedFile(file);
      setPreviewURL(createLocalPreviewURL(file));
    }
  };

  // Handle upload
  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      await uploadMutation.mutateAsync(selectedFile);
      // Clear selection after successful upload
      if (previewURL) {
        revokeObjectURL(previewURL);
      }
      setSelectedFile(null);
      setPreviewURL(null);
      // Reset file input
      const fileInput = document.getElementById('photo-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  // Load poster URLs when posters change
  useEffect(() => {
    if (!posters || posters.length === 0) {
      setPosterURLs([]);
      return;
    }

    const loadPosterURLs = async () => {
      const urls = await Promise.all(
        posters.map(async (blob) => {
          try {
            return await createPosterImageURL(blob, 'image/jpeg');
          } catch (error) {
            console.error('Failed to load poster URL:', error);
            return '';
          }
        })
      );
      setPosterURLs(urls.filter(url => url !== ''));
    };

    loadPosterURLs();
  }, [posters]);

  // Cleanup preview URL on unmount
  useEffect(() => {
    return () => {
      if (previewURL) {
        revokeObjectURL(previewURL);
      }
    };
  }, [previewURL]);

  // Not authenticated state
  if (!isAuthenticated) {
    return (
      <Card className="border-2 border-primary/20 shadow-copper">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Upload Your Photos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please sign in to upload and view your photos.
            </AlertDescription>
          </Alert>
          <Button
            onClick={login}
            disabled={isLoggingIn}
            className="w-full"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <Card className="border-2 border-primary/20 shadow-copper">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Upload Your Photos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* File Input */}
          <div className="space-y-2">
            <label htmlFor="photo-upload" className="block text-sm font-medium text-foreground">
              Choose an image file
            </label>
            <Input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={uploadMutation.isPending}
              className="cursor-pointer"
            />
          </div>

          {/* Preview */}
          {previewURL && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Preview:</p>
              <div className="flex justify-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                <img
                  src={previewURL}
                  alt="Upload preview"
                  className="max-w-full max-h-64 h-auto rounded-md"
                />
              </div>
            </div>
          )}

          {/* Upload Button */}
          <Button
            onClick={handleUpload}
            disabled={!selectedFile || uploadMutation.isPending}
            className="w-full"
          >
            {uploadMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Photo
              </>
            )}
          </Button>

          {/* Error Display */}
          {uploadMutation.isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {uploadMutation.error instanceof Error
                  ? uploadMutation.error.message
                  : 'Failed to upload photo. Please try again.'}
              </AlertDescription>
            </Alert>
          )}

          {/* Success Message */}
          {uploadMutation.isSuccess && !uploadMutation.isPending && (
            <Alert>
              <AlertDescription className="text-success">
                Photo uploaded successfully!
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Gallery Section */}
      <Card className="border-2 border-primary/20 shadow-copper">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Your Uploaded Photos</CardTitle>
        </CardHeader>
        <CardContent>
          {postersError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {postersError instanceof Error
                  ? postersError.message
                  : 'Failed to load photos. Please try again.'}
              </AlertDescription>
            </Alert>
          )}

          {postersLoading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {!postersLoading && !postersError && posterURLs.length === 0 && (
            <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
              <ImageIcon className="h-12 w-12 mb-4 opacity-50" />
              <p>No photos uploaded yet. Upload your first photo above!</p>
            </div>
          )}

          {!postersLoading && !postersError && posterURLs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posterURLs.map((url, index) => (
                <div
                  key={index}
                  className="flex justify-center p-4 bg-primary/5 rounded-lg border border-primary/20"
                >
                  <img
                    src={url}
                    alt={`Uploaded photo ${index + 1}`}
                    className="max-w-full h-auto rounded-md"
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
