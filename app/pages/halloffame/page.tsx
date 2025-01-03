import React from 'react';
import Scrollbar from '@/components/scrollbar';
import ThreeScene from '@/components/ThreeScene';
import Footer from '@/components/footer';

const Page: React.FC = () => {
  return (
    <>
      <section className="min-h-screen bg-red-500 grid place-items-center relative" id='section1'>
        <div className='absolute flex items-center justify-center flex-col top-1/2 transform -translate-y-1/3 text-center'>
          Welcome to Skills & Achievemtns Section  
          <ThreeScene />
        </div>
        <div className="absolute right-20 top-1/3 transform -translate-y-1/2 w-2 h-32 hidden md:block">
          <Scrollbar />
        </div>
      </section>
      <section className="min-h-screen bg-blue-500 flex items-center justify-center" id='section2'>
        <h1 className="text-white text-4xl">Section B</h1>
      </section>
      <section className="min-h-screen bg-green-500 flex items-center justify-center" id='section3'>
        <h1 className="text-white text-4xl">Section C</h1>
      </section>
      <section className="min-h-screen bg-yellow-500 flex items-center justify-center" id='section4'>
        <h1 className="text-white text-4xl">Section D</h1>
      </section>
      <section className="min-h-screen bg-violet-500 flex items-center justify-center" id='section5'>
        <h1 className="text-white text-4xl">Section E</h1>
      </section>
      <Footer />
    </>
  );
};

export default Page;