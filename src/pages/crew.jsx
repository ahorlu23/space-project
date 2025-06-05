import { useState } from "react"
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import bgCrew from "../assets/crew/background-crew-desktop.jpg"
import data from '../data.json'

export default function CrewPage() {

    // Load data
    const [crew, setCrews] = useState(data.crew)

    const [currentIndex, setCurrentIndex] = useState(0)

    // Listen and wait
    const [selectedCrewMember, setSelectedCrewMember] = useState(crew[currentIndex])

    

    const handleNextImage=()=>{

        if(currentIndex >= crew.length-1) {
        setCurrentIndex(0)
        setSelectedCrewMember(crew[0])
        }else {
        setSelectedCrewMember(crew[currentIndex + 1]) 
        setCurrentIndex(currentIndex +1)
        }
       
    }

    const handlePreviousImage= ()=>{
        if(currentIndex == 0){
            setCurrentIndex(crew.length-1)
            setSelectedCrewMember(crew[currentIndex + crew.length-1])
        }else {
            setSelectedCrewMember(crew[currentIndex -1])
            setCurrentIndex(currentIndex -1)
        }
        
    }
    


    return(
        <>
            <div>
                <div className='absolute -z-10 inset-0'>
                    <img src={bgCrew} className='object-cover h-full w-full' />
                </div>


                <div className='w-full pt-40 px-32'>
                    <h2 className='text-white'><span className='text-gray-700 font-semibold pr-4'>01</span>MEET YOUR CREW</h2>   
                </div>

                <div className="absolute z-50 border-2 w-full flex    border-white">

                    <div> <button onClick={handlePreviousImage}> <FaChevronLeft className="text-white" /> </button></div>
                    
                    <div className="ml-330"> <button onClick={handleNextImage}> <FaChevronRight className="text-white" /> </button> </div>
                    
                </div>

                <div className="w-full flex px-32 mt-10 border h-24">
                    <div className="w-1/2">
                        <h2 className="text-gray-700">{selectedCrewMember.role}</h2>
                        <h1 className="text-white text-5xl">{selectedCrewMember.name}</h1>
                        <p className="text-white mt-5">{selectedCrewMember.bio}</p>
                    </div>

                    <div className="w-1/2">
                        <img className="w-80 h-100" src={selectedCrewMember.images.png} alt="Lady Background" />
                    </div>
                </div>

                <div className="border mt-30 px-32 gap-5 flex">
                    <div onClick={()=> setSelectedCrewMember(crew[0])} className="bg-white w-2 h-2 rounded-full"></div>
                    <div onClick={()=> setSelectedCrewMember(crew[1])} className="bg-white w-2 h-2 rounded-full"></div>
                    <div onClick={()=> setSelectedCrewMember(crew[2])} className="bg-white w-2 h-2 rounded-full"></div>
                    <div onClick={()=> setSelectedCrewMember(crew[3])} className="bg-white w-2 h-2 rounded-full"></div>
                </div>

            </div>
        </>
    )
}