'use client'
import Image from 'next/image';
import { useState } from 'react';
import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import { shoes, statistics } from '../datas/index';

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    return (
        <section id="home" className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className='text-xl font-montserrat text-sky-400'>All Weather Collection</p>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className=' xl:bg-white xl:whitespace-nowrap relative lg:z-10 md:z-10 pr-10'>The Most Latest</span>
  
            <br />
            <span className='text-transparent text-8xl bg-clip-text bg-gradient-to-r from-sky-400 to-pink-700 inline-block mt-3'>Nike </span> Shoes
          </h1>
          <p className=' font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-w-lg'>Explore Nike world of premium sportswear and athletic footwear. Discover top-quality products designed to enhance your athletic performance and style. Shop the latest collections and enjoy unbeatable comfort and style. Join the Nike community today.
          </p>
          <Button label="Shop Now" iconUrl={arrowRight} />
  
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index) => (
              <div key={index}>
                <p className='text-4xl font-bold font-palanquin'>{stat.value} </p>
                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label} </p>
              </div>
            ))}
          </div>
        </div>
  
        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gradient-to-b from-blue-200 to-teal-50 bg-cover bg-center'>
          <Image src={bigShoeImg} alt="shoe collection" width={610} height={500} className='object-contain relative z-10' />
          <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            {shoes.map((image, index) => (
              <div key={index}>
                <ShoeCard
                  index={index}
                  imgURL={image}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Hero;