import Image from 'next/image';

const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-10 py-16 hover:cursor-pointer bg-white transition-colors duration-700 ease-in-out hover:bg-blue-200'>
      <div className='w-11 h-11 flex justify-center items-center bg-sky-400 rounded-full'>
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
        {label}
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        {subtext}
      </p>
    </div>
    );
};

export default ServiceCard;