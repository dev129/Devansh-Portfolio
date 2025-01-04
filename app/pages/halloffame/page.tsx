import React from 'react';
import Scrollbar from '@/components/scrollbar';
import ThreeScene from '@/components/ThreeScene';
import Footer from '@/components/footer';

const Page: React.FC = () => {
  return (
    <>
      <section className="min-h-screen bg-white dark:bg-black grid place-items-center relative overflow-hidden text-clip" id='section1'>
      <div className='absolute flex items-center justify-center flex-col top-1/2 transform -translate-y-1/3 text-center'>
  <div className="absolute z-0 text-black dark:text-white text-center pb-52 xl:text-9xl lg:text-7xl md:text-5xl sm:text-xl text-5xl font-extrabold overflow-hidden text-clip">
  <span>Skills </span>
<div className="block h-64 m-10"></div>
<span>Achievements</span>
  </div>
  <div className="relative z-10">
    <ThreeScene />
  </div>
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