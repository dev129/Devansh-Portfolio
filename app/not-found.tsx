'use client'
import React from 'react'
import Footer from '@/components/footer'

const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex flex-col items-center justify-center text-center text-black flex-grow'>
        <img 
          src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Default&eyebrowType=UpDownNatural&mouthType=Sad&skinColor=Brown' 
          alt='Not Found' 
        />
        <div className='text-4xl font-bold text-black dark:text-white mt-4'>Guess you came at the wrong page</div>
        <div className='mt-4 flex space-x-4'>
<button
  className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
  type="button"
  onClick={() => window.history.back()}
>
  <div
    className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      height="25px"
      width="25px"
    >
      <path
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        fill="#000000"
      ></path>
      <path
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        fill="#000000"
      ></path>
    </svg>
  </div>
  <p className="translate-x-2">Go Back</p>
</button>
        </div>
      </div>
      <div className='mb-5'>
        <Footer />
      </div>
    </div>
  )
}

export default NotFound
