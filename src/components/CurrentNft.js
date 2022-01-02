import React from 'react'

const CurrentNft = () => {
    return (
        <div className="flex text-white w-full p-3 mb-10">
            <div className="h-60  ">
                <img className="h-full rounded-xl object-contain" src="https://ipfs.io/ipfs/bafkreigehmswocff4fwv4ktbvs7bfj2eliledu2ofegi664fxraaowzjwq" alt="current" />
            </div>

            <div className="flex flex-col justify-between flex-1 px-12  ">
                <div>
                    <h1 className=" font-bold text-6xl">BEST GODDESS<span className="text-gray-300">·#1</span></h1>
                </div>

                <div className='flex justify-between'>
                    <div className="flex flex-1">
                        <img className="h-14 object-contain rounded-full mr-3" src="https://ipfs.io/ipfs/bafkreigehmswocff4fwv4ktbvs7bfj2eliledu2ofegi664fxraaowzjwq" alt="user" />
                        <div >
                            <p>0x134712341234huqe2341</p>
                            <a className="text-cyan-500 hover:underline" href="https://google.com">@HSKDA</a>
                        </div>
                    </div>

                    <div>more</div>
                </div>


            </div>

        </div>
    )
}

export default CurrentNft
