import Image from 'next/image';
import { shoe8 } from '../assets/images';
import Button from '../components/Button';

const SuperQuality = () => {
    return (
        <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container padding-y padding-x" id="about-us">

      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          <span className=' xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Discover <span className='text-sky-400 inline-block mt-3'>Premium </span>
          </span>
          <br />
          <span className='text-sky-400 inline-block mt-3'>Footwear</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Explore Nike world of top-tier sportswear and athletic footwear. Uncover high-quality products meticulously crafted to elevate both your athletic performance and style. Shop the latest collections and indulge in unbeatable comfort and fashion. Join the Nike community today.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Immerse yourself in our newest collections, delivering unparalleled comfort and unrivaled style. Become a part of the Nike community today and experience the pinnacle of sportswear excellence.
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>

      </div>

      <div className="flex-1 flex justify-center items-center bg-gradient-to-r from-blue-200 to-green-100 rounded-md">
        <Image src={shoe8} alt="shoe8" width={570} height={522} className='object-contain' />
      </div>
    </section>
    );
};

export default SuperQuality;