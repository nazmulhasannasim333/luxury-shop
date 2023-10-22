import Image from 'next/image';
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../datas/index";

const Footer = () => {
    return (
        <div className='padding-x padding-t pb-8 bg-black text-white'>
        <div className='max-container'>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
          <div className='flex flex-col items-start'>
            <a href='/'>
              <Image
                src={footerLogo}
                alt='logo'
                width={150}
                height={46}
                className='m-0'
              />
            </a>
            <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className='flex items-center gap-5 mt-8'>
              {socialMedia.map((icon) => (
                <div
                  className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-sky-400'
                  key={icon.alt}
                >
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
  
          <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                    {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray hover:text-blue-300'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
  
        <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <Image
              src={copyrightSign}
              alt='copyright sign'
              width={20}
              height={20}
              className='rounded-full m-0'
            />
            <p>Copyright. All rights reserved <span className='text-transparent text-2xl font-bold bg-clip-text bg-gradient-to-r from-sky-400 to-pink-700'>Nike-Luxury</span></p>
          </div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions &copy;2023</p>
        </div>
      </div>
        </div>
    );
};

export default Footer;