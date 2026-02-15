import { ExternalBlob } from '../backend';

export async function createPosterImageURL(blob: ExternalBlob, mimeType?: string): Promise<string> {
  try {
    // First try to use the direct URL
    const directURL = blob.getDirectURL();
    if (directURL) {
      return directURL;
    }
  } catch (error) {
    console.warn('Direct URL not available, falling back to bytes:', error);
  }

  // Fallback: fetch bytes and create object URL
  try {
    const bytes = await blob.getBytes();
    const blobObj = new Blob([bytes], { type: mimeType || 'image/png' });
    return URL.createObjectURL(blobObj);
  } catch (error) {
    console.error('Failed to create image URL from bytes:', error);
    throw error;
  }
}

export function createLocalPreviewURL(file: File): string {
  return URL.createObjectURL(file);
}

export function revokeObjectURL(url: string): void {
  if (url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
}
