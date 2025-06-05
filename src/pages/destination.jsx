import backgroundImage from '../assets/destination/background-destination-desktop.jpg'
import { useState } from 'react'
import data from '../data.json'


export default function DestinationPage(){

    // The logic for this component

    // Loading all destination into this state
    const [destinations, setDestinations] = useState(data.destinations)

    // Listen and waits for the selected destination to change
    const [selectedDestination, setSelectedDestination] = useState(destinations[0])

    const handleDestination = (destination) => {

        if (destination === "Moon") {
            setSelectedDestination(destinations[0])
        }
        else if (destination === "Mars") {
            setSelectedDestination(destinations[1])
        }
        else if (destination === "Europa") {
            setSelectedDestination(destinations[2])
        }
        else if (destination === "Titians") {
            setSelectedDestination(destinations[3])
        }
    }



    return(
        <>
            <div className="h-screen bg-cover bg-center">
                <div className='absolute -z-10 inset-0'>
                    <img src={backgroundImage} className='object-cover h-full w-full' />
                </div>

                <div className='w-full pt-40 px-32'>
                    <h2 className='text-white'><span className='text-gray-700 font-semibold pr-4'>01</span>PICK A DESTINATION</h2>   
                </div>

                <div className='w-full border flex justify-between  px-32 mt-10'>
                        <div className='w-1/2'>
                            <img src={selectedDestination.images.png} alt="" className='w-2/3' />
                        </div>

                        <div className='w-1/2'>

                             <ul className='flex gap-7 text-white-400 uppercase'>
                                <li onClick={()=>handleDestination('Moon')} className=' text-white-400 hover:border-b-2 py-2'>MOON</li>
                                <li onClick={()=>handleDestination('Mars')} className='hover:border-b-2 py-2'>MARS</li>
                                <li onClick={()=>handleDestination('Europa')} className='hover:border-b-2 py-2'>EUROPA</li>
                                <li onClick={()=>handleDestination('Titians')} className='hover:border-b-2 py-2'>TITIAN</li>
                            </ul>
                            
                            <h1 className='text-4xl font-serif  mb-6 text-white mt-14 font-extrabold'>{selectedDestination.name}</h1>
                            <p className='w-3/5 text-white-500 mt-10'>{selectedDestination.description}</p>

                            <div className="border-gray-400 z-50 border -t w-1/2"></div>
                            
                            <div className='w-1/2'> 
                              <ul className='flex justify-between text-gray-400 mt-6 text-sm'>
                                    <li>AVG. DISTANCE</li>
                                    <li>Est. TIME TRAVEL</li>
                                </ul>
                             </div>
                              
                            
                            <div className='w-1/2'>
                                <ul className='flex justify-between text-white-400 mt-2 font-extrabold'>
                                    <li>{selectedDestination.distance}</li>
                                    <li>{selectedDestination.travel}</li>
                                </ul>
                            </div>
                            

                        </div>
                </div>

            </div>

            

        </>
        
        
    )

}