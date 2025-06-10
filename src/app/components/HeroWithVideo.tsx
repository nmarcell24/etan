// app/components/HeroWithVideo.tsx
require('dotenv').config();
import { list } from '@vercel/blob';
import Hero from '@/app/components/Hero'; // the client component

export default async function HeroWithVideo() {
  const { blobs } = await list({ prefix: 'bg-loop-cAmZb12FgWHR1Lswk9NppLEH1fdpZz.mp4', limit: 1, token: process.env.VERCEL_BLOB_TOKEN });
  const videoUrl = blobs[0]?.url;

  return <Hero videoUrl={videoUrl} />;
}
