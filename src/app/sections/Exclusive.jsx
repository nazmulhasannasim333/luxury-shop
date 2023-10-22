import Image from 'next/image';
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from '../components/Button';

const Exclusive = () => {
    return (
        <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container padding-y padding-x'>
        <div className='flex-1'>
          <Image
            src={offer}
            alt='Shoe Promotion'
            width={773}
            height={687}
            className='object-contain w-full'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <h2 className='text-4xl font-palanquin font-bold'>
            <span className='text-sky-400'>Exclusive </span>
            Deals
          </h2>
          <p className='mt-4 info-text'>
            Embark on a shopping adventure filled with extraordinary offers. From premium selections to unbeatable discounts, we provide unmatched value that distinguishes us.
          </p>
          <p className='mt-6 info-text'>
            Explore a world of possibilities crafted to satisfy your unique desires, surpassing even the highest expectations. Your journey with us is nothing short of remarkable.
          </p>
  
          <div className='mt-11 flex flex-wrap gap-4'>
            <Button label='Shop now' iconURL={arrowRight} />
            <Button
              label='Learn more'
              backgroundColor='bg-white'
              borderColor='border-slate-gray'
              textColor='text-slate-gray'
            />
          </div>
        </div>
      </section>
    );
};

export default Exclusive;