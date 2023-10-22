import PopularProductCard from '../components/PopularProductCard';
import { products } from '../datas/index';

const PopularProducts = () => {
    return (
        <div className="max-container mt-16 max-sm:mt-12 padding-x padding-y" id="products">
        <div className="flex flex-col justify-start gap-5">
          <h2 className='text-4xl font-palanquin font-bold'>Our Popular <span className="text-sky-400">Products</span></h2>
          <p className=' lg:max-w-lg text-slate-gray mt-2 font-montserrat'>
            Explore top-quality products meticulously crafted to elevate your athletic performance and enhance your personal style.
          </p>
        </div>
  
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-4">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    );
};

export default PopularProducts;