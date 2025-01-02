// pages/index.tsx
import Head from 'next/head';
import ThreeScene from '@/components/ThreeScene'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <ThreeScene />
    </div>
  );
}
