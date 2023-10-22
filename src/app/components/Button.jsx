import Image from 'next/image';

const Button = ({label,
    iconUrl,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth}) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none hover:bg-blue-400
    ${backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-gradient-to-r text-white font-semibold from-pink-500 to-sky-400 hover:from-pink-500 hover:to-yellow-500 "
      } rounded-full ${fullWidth && "w-full"}
    `}>
      {label}
      {iconUrl && <Image height={100} width={100} src={iconUrl} alt="iconurl" className='ml-2 rounded-full w-5 h-5' />}
    </button>
    );
};

export default Button;