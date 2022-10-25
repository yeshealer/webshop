import React from 'react'
import { RightArrow, CycleIcon } from '../../assets/svg'

export default function OverflowCarouselSection() {
    return (
        <div className='relative'>
            <div className='sticky -top-1'>
                <div className='flex justify-between border-t border-black py-3 xl:py-2 cursor-pointer bg-white'>
                    <div className='font-[CormorantGaramond-light] text-[19px] sm:text-[22px] md:text-[27px] 2xl:text-[30px] tracking-[8px] sm:tracking-[15px] xl:tracking-[25px] 2xl:tracking-[30px] pl-2'>THE reCIRCLE CROWD</div>
                    <div className='flex items-center gap-10 xl:gap-20 pr-2 sm:pr-10'>
                        <div className='tracking-[5px] 2xl:tracking-[10px] text-[15px] font-[CormorantGaramond-light] hidden lg:block'>DUBAI , SHARJAH , ABU DHABI</div>
                        <RightArrow />
                    </div>
                </div>
                <div className='relative'>
                    <img src='images/Two Models.jpg' alt='Two Models' />
                    <button className='bg-[#221E20] rounded-full py-3 px-12 text-md text-white absolute bottom-[30%] right-[20%] hover:bg-[#745152] animation-all duration-300'>Join Us</button>
                </div>
            </div>
            <div className='sticky top-[100px] sm:top-[48px] md:top-[52px] 2xl:top-[58px]'>
                <div className='flex justify-between border-t border-black py-2 cursor-pointer bg-white'>
                    <div className='font-[CormorantGaramond-light] text-[19px] sm:text-[22px] md:text-[27px] 2xl:text-[30px] tracking-[8px] sm:tracking-[15px] md:tracking-[25px] 2xl:tracking-[30px] pl-2'>LEAD THE CHANGE</div>
                </div>
                <div className='relative'>
                    <div className='absolute bottom-[15%] left-[20%] font-[CormorantGaramond-light]'>GOOD THINGS COME TO THOSE WHO DON'T WASTE</div>
                    <img src='images/Fashion Accessories.jpg' alt='Fashion Accessories' />
                </div>
            </div>
            <div className='sticky top-[200px] sm:top-[96px] md:top-[108px] 2xl:top-[120px]'>
                <div className='flex justify-between border-t border-black py-2 cursor-pointer bg-white'>
                    <div className='font-[CormorantGaramond-light] text-[19px] sm:text-[22px] md:text-[27px] 2xl:text-[30px] tracking-[8px] sm:tracking-[15px] md:tracking-[25px] 2xl:tracking-[30px] pl-2'>SHOP ADAKUDÖ</div>
                    <div className='flex items-center gap-10 xl:gap-20 pr-2 sm:pr-10'>
                        <div className='tracking-[10px] text-[15px] font-[CormorantGaramond-light] hidden lg:block'>SHOP NOW</div>
                        <RightArrow />
                    </div>
                </div>
                <img src='images/House Plant.jpg' alt='House Plant' />
            </div>
            <div className='sticky top-[300px] sm:top-[146px] md:top-[164px] 2xl:top-[182px]'>
                <div className='flex justify-between border-t border-black py-2 cursor-pointer bg-white'>
                    <div className='font-[CormorantGaramond-light] text-[19px] sm:text-[22px] md:text-[27px] 2xl:text-[30px] tracking-[8px] sm:tracking-[15px] md:tracking-[25px] 2xl:tracking-[30px] pl-2'>CLEAN OUT</div>
                    <div className='flex items-center gap-10 xl:gap-20 pr-2 sm:pr-10'>
                        <div className='tracking-[10px] text-[15px] font-[CormorantGaramond-light] hidden lg:block'>BRANDS WE ACCEPT</div>
                        <RightArrow />
                    </div>
                </div>
                <img src='images/Outfit.jpg' alt='Outfit' />
            </div>
            <div className='sticky top-[400px] sm:top-[196px] md:top-[220px] 2xl:top-[244px]'>
                <div className='flex justify-between border-t border-black py-2 cursor-pointer bg-white'>
                    <div className='font-[CormorantGaramond-light] text-[19px] sm:text-[22px] md:text-[27px] 2xl:text-[30px] tracking-[8px] sm:tracking-[15px] md:tracking-[25px] 2xl:tracking-[30px] pl-2'>HOW IT WORKS</div>
                    <div className='flex items-center gap-10 xl:gap-20 pr-2 sm:pr-10'>
                        <div className='tracking-[10px] text-[15px] font-[CormorantGaramond-light] hidden lg:block'>ORDER A reCIRCLE BAG</div>
                        <RightArrow />
                    </div>
                </div>
                <img src='images/White Rocks.jpg' alt='White Rocks' />
            </div>
            <div className='sticky top-[500px] sm:top-[246px] md:top-[276px] 2xl:top-[306px]'>
                <div className='flex justify-between border-t border-black py-2 cursor-pointer bg-white'>
                    <div className='font-[CormorantGaramond-light] text-[19px] sm:text-[22px] md:text-[27px] 2xl:text-[30px] tracking-[8px] sm:tracking-[15px] md:tracking-[25px] 2xl:tracking-[30px] pl-2'>COPA 28</div>
                    <div className='flex items-center gap-10 xl:gap-20 pr-2 sm:pr-10'>
                        <div className='tracking-[10px] text-[15px] font-[CormorantGaramond-light] hidden lg:block'>SUSTAINABILITY IN THE UAE</div>
                        <RightArrow />
                    </div>
                </div>
                <img src='images/Wall Decor.jpg' alt='Wall Decor' />
            </div>
            <div className='sticky top-[600px] sm:top-[296px] md:top-[332px] 2xl:top-[368px] w-full'>
                <div className='flex justify-between border-t border-black py-2 cursor-pointer bg-white'>
                    <div className='font-[CormorantGaramond-light] text-[19px] sm:text-[22px] md:text-[27px] 2xl:text-[30px] tracking-[8px] sm:tracking-[15px] md:tracking-[25px] 2xl:tracking-[30px] pl-2'>RE-COMMERCE</div>
                    <div className='flex items-center gap-10 xl:gap-20 pr-2 sm:pr-10'>
                        <div className='tracking-[10px] text-[15px] font-[CormorantGaramond-light] hidden lg:block'>THE BLOG</div>
                        <RightArrow />
                    </div>
                </div>
                <img src='images/White Coat Rack.jpg' alt='White Coat Rack' />
            </div>
            <div className='relative'>
                <img src='images/T Shirt Hangers.jpg' alt='T Shirt Hangers' className='h-[250px] w-full sm:h-auto' />
                <div className='absolute bottom-0 left-[20%]'>
                    <div className='flex items-end text-[#221E20]'>
                        <p className='text-[50px] sm:text-[70px] md:text-[100px] xl:text-[124px] -mr-[18px] sm:-mr-[24px] md:-mr-[30px] xl:-mr-[40px] leading:[120px] md:leading-[160px]'>re</p>
                        <CycleIcon />
                        <p className='text-[50px] sm:text-[70px] md:text-[100px] xl:text-[124px] -ml-2 sm:-ml-5'>IRCLE</p>
                    </div>
                    <div className='font-[CormorantGaramond-light] mt-1 sm:mt-0 text-md sm:text-xl sm:text-[24px] md:text-[27px] lg:text-[30px] xl:text-[35px] flex gap-2 -mt-5'>
                        <a href='https://instagram.com'>INSTAGRAM</a>-
                        <a href='https://facebook.com'>FACEBOOK</a>-
                        <a href='https://twitter.com'>TWITTER</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
