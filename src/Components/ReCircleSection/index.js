import React from 'react'
import {
    ReCircleSectionContent,
    LeftReCircleSection
} from '../style'
import { CycleIcon } from '../../assets/svg'

export default function ReCircleSection() {
    return (
        <ReCircleSectionContent>
            <LeftReCircleSection>
                <div className='flex justify-center gap-2 sm:gap-5'>
                    <div className='flex flex-col gap-2 sm:gap-5 w-[190px] sm:w-[276px] lg:w-[244px] xl:w-[276px]'>
                        <div className='flex gap-2 sm:gap-5'>
                            <img src='images/gadget-1.webp' alt='ReCircleSection gadget' className='w-[90px] h-[90px] sm:w-32 sm:h-32 lg:w-28 lg:h-28 xl:w-32 xl:h-32' />
                            <img src='images/gadget-2.webp' alt='ReCircleSection gadget' className='w-[90px] h-[90px] sm:w-32 sm:h-32 lg:w-28 lg:h-28 xl:w-32 xl:h-32' />
                        </div>
                        <img src='images/gadget-3.webp' alt='ReCircleSection gadget' className='w-full' />
                    </div>
                    <div className='flex flex-col gap-2 sm:gap-5'>
                        <img src='images/gadget-4.webp' alt='ReCircleSection gadget' className='w-[158px] sm:w-[226px] lg:w-[200px] xl:w-[226px]' />
                        <img src='images/gadget-5.webp' alt='ReCircleSection gadget' className='w-[158px] sm:w-[226px] lg:w-[200px] xl:w-[226px]' />
                    </div>
                </div>
                <div className='flex text-[#221E20] items-end mt-5 md:mt-2'>
                    <p className='text-[50px] sm:text-[70px] md:text-[100px] xl:text-[124px] -mr-[18px] sm:-mr-[24px] md:-mr-[30px] xl:-mr-[40px] leading-[80px] sm:leading-[120px] md:leading-[160px]'>re</p>
                    <CycleIcon />
                    <div className='-ml-4 relative'>
                        <p className='text-[50px] sm:text-[70px] md:text-[100px] xl:text-[124px]'>IRCLE</p>
                        <p className='font-[forum] font-thin tracking-[0.3em] text-[9px] sm:text-sm md:text-lg xl:text-xl absolute bottom-2 md:bottom-4 xl:bottom-5 right-3'>IT'S A MOVEMENT</p>
                    </div>
                </div>
            </LeftReCircleSection>
            <img src='images/Clothing Rack.jpg' alt='Clothing Rack' className='w-full h-[500px] sm:h-[600px] lg:h-full opacity-30 lg:opacity-100 z-0' />
        </ReCircleSectionContent>
    )
}
