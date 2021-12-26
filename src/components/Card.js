import React from 'react'
import ethIcon from '../assets/eth.png'
const Card = ({ img, title, traits, id }) => {
    return (
        <div className="bg-gray-600 text-offWhite w-60 h-[400px] rounded-xl shadow-md shadow-gray-600 overflow-hidden">
            <img src={img} alt={title} className="w-full object-cover" />
            {/* details */}
            <div className="p-5">
                <p className="text-xl font-bold">{title}</p>
                <p className="text-gray-300">.#{id}</p>
                {/* price */}
                <div className="flex">
                    <img className="w-6 object-contain ml-[-8px]" src={ethIcon} alt="eth" />
                    <p>{traits.find((trait) => trait.trait_type === 'price').value}</p>
                </div>
            </div>

        </div>
    )
}

export default Card
