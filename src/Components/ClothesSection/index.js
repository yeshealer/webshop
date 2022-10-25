import React from 'react'
import { ClothesSectionContent } from '../style'

export default function ClothesSection() {
    return (
        <ClothesSectionContent>
            <div className='flex flex-col xl:grid xl:grid-cols-2'>
                <div className='relative w-full flex justify-center'>
                    <img src='images/clothes.png' alt='clothes' />
                    <div className='bg-[#221e20dc] text-white absolute bottom-12 h-2/3 w-[95%] left-2 flex items-center px-[15%] text-md sm:text-lg md:text-xl font-thin font-[CormorantGaramond-light]'>Keep pieces in circulation, and out of landfills</div>
                </div>
                <div className='flex flex-col items-center justify-evenly'>
                    <div className='text-sm sm:text-md md:text-lg'>Shop our range of sanitized and curated circular products</div>
                    <button className='text-[12px] md:text-[14px] font-semibold border-2 border-black py-1.5 md:py-2.5 px-7 md:px-10 text-[#111] hover:bg-[blue] hover:border-[blue] hover:text-white animation-all duration-500 mt-3 md:mt-0'>Explore</button>
                    <div className='flex flex-col sm:flex-row justify-around lg:justify-between w-full mt-5 gap-2 sm:gap-0'>
                        <img src='images/Gray Jeans.jpg' alt='Gray Jeans' className='w-full sm:w-[150px] md:w-[180px] lg:w-auto xl:w-[200px] 2xl:w-auto' />
                        <img src='images/White Sneakers.jpg' alt='White Sneakers' className='w-full sm:w-[150px] md:w-[180px] lg:w-auto xl:w-[200px] 2xl:w-auto' />
                        <img src='images/White T-shirt.jpg' alt='White T-shirt' className='w-full sm:w-[150px] md:w-[180px] lg:w-auto xl:w-[200px] 2xl:w-auto' />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-5'>
                <div className='text-xl sm:text-2xl md:text-3xl font-[CormorantGaramond-light] text-center'>CURATED CIRCULAR COMMUNITY</div>
                <div className='text-sm md:text-md'>REQUEST A CLEAN OUT BAG</div>
                <button className='text-sm md:text-md font-semibold border-2 border-black py-1.5 md:py-2.5 px-7 md:px-10 text-[#111] hover:bg-[black] hover:border-[black] hover:text-white animation-all duration-500 font-[CormorantGaramond-light]'>Click Here</button>
            </div>
        </ClothesSectionContent>
    )
}
