import Image from 'next/image';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
          changeBigShoeImage(imgURL.bigShoe)
        }
      }

    return (
        <div className={`border-2 rounded-xl
      ${bigShoeImg === imgURL.bigShoe ?
        'border-coral-blue'
        : 'border-transparent'
      } cursor-pointer max-sm:flex-1
      `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-gradient-to-b from-red-100 to-teal-100 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image src={imgURL.thumbnail} alt="shoe" width={127} height={103} className="object-contain" />
      </div>
    </div>
    );
};

export default ShoeCard;