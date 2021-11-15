import React from 'react'

function Card(props:any) {
    
    return (
        <>
         <div className="md:h-52 col-span-12 md:col-span-6 xl:col-span-4 border border-gray-600 rounded ">
             <div className="grid grid-cols-12 order-last gap-4 px-3 lg:px-8 py-4 lg:py-6">

                 <div className="col-span-12 md:col-span-8 flex flex-col justify-between h-26">
                     <p className="text-xl font-semibold">{props.title}</p>
                     <p className="flex-auto pt-1">Sizes : S | M | XL</p>
                     <div className="flex flex-row gap-4 items-center">
                         <p className="font-semibold">${props.price}</p>
                         <p className="line-through text-gray-500">${props.cost} </p>
                         <p className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs">{props.off}% off</p>
                     </div>
                 </div>


                 <div className="col-span-12 md:col-span-4 flex flex-col gap-3 items-center">
                        <div className="flex border border-gray-500  rounded h-28 w-24">
                            <img className="mx-auto object-scale-down" src="" alt="" />
                        </div>
                        <button className="border border-[#861703] rounded-lg px-6 w-full ">Buy Now</button>
                    </div>
             </div>
         </div>
        </>
    )
}

export default Card