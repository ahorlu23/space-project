import { useState } from "react"
import bgTech from "../assets/technology/background-technology-desktop.jpg"
import data from "../data.json"


export default function TechPage() {
    // Load data
    const [tech, setTech] = useState(data.technology)

    // listen and wait
    const [selectedTech, setSelectedTech] = useState(tech[0])
    return(
        <>
            <div>
                <div className='absolute -z-10 inset-0'>
                    <img src={bgTech} className='object-cover h-full w-full' />
                </div>

                <div className='w-full pt-40 px-32'>
                    <h2 className='text-white'><span className='text-gray-700 font-semibold pr-4'>03</span>SPACE LAUNCH 101</h2>   
                </div>

                <div className="flex border w-full">
                    <div className="flex w-1/2">
                        <div className="flex-col ml-30 mt-10">
                            <div onClick={()=>setSelectedTech(tech[0])}  className="border mb-2 border-white text-white w-15 h-15 rounded-full items-center justify-center py-4 hover:bg-white group  px-5"><span className="group-hover:text-black mx-1">1</span></div>
                            <div onClick={()=>setSelectedTech(tech[1])} className="border mb-2 border-white text-white w-15 h-15 rounded-full items-center justify-center py-4 hover:bg-white group  px-5"><span className="group-hover:text-black mx-1">2</span></div>
                            <div onClick={()=>setSelectedTech(tech[2])}  className="border mb-2 border-white text-white w-15 h-15 rounded-full items-center justify-center py-4 hover:bg-white group  px-5"><span className="group-hover:text-black mx-1">3</span></div>
                            
                        </div>
                        
                        <div className="flex-col ml-15 mt-10">
                            <h2 className="text-gray-700">THE TERMINOLOGY</h2>
                        <h1 className="text-white text-5xl">{selectedTech.name}</h1>
                        <p className="text-white mt-5">{selectedTech.description}</p>

                        </div>
                        

                    </div>

                    <div className="w-1/2">
                        <img className="w-80 h-100 ml-15" src={selectedTech.images.portrait} alt="ImageBackground" />
                    </div>
                </div>
            </div>
        </>
    )
}