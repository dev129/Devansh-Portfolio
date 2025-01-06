'use client'
import { GiProcessor } from "react-icons/gi"; 
import { MdComputer } from "react-icons/md"; 
import Marquee from "react-fast-marquee";

const TechSkills: React.FC = () => {
    return (<>
    <div className="mb-10 text-center flex items-center justify-center text-4xl font-bold text-white  bg-black">
            <GiProcessor color="white" />&nbsp; Technical Skills and Certifications &nbsp; <MdComputer color="white"  />
    </div>

        <div className="flex justify-center items-center h-full">
            <Marquee gradient={false} speed={50} autoFill={true}  >
                {/* Marquee items will be evenly spaced */}
                <img src="https://picsum.photos/200" alt="Certification 1" className="mx-4 inline-block" />
                <img src="https://picsum.photos/200" alt="Certification 2" className="mx-4 inline-block" />
                <img src="https://picsum.photos/200" alt="Certification 3" className="mx-4  inline-block" />
                <img src="https://picsum.photos/200" alt="Certification 4" className="mx-4 inline-block" />
                <img src="https://picsum.photos/200" alt="Certification 5" className="mx-4 inline-block" />
            </Marquee>
        </div>
    </>
    );
};

export default TechSkills;
