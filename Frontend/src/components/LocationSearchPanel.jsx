import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion) // Set the selected suggestion as pickup
        } else if (activeField === 'destination') {
            setDestination(suggestion) // Set the selected suggestion as destination
        }
        setPanelOpen(false) // Close the panel after selection
    }

    return (
        <div>
            {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-1 border-2 p-1 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default LocationSearchPanel