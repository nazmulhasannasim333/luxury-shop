import CustomerReviews from "./sections/CustomerReviews";
import Exclusive from "./sections/Exclusive";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";


export default function Home() {
  return (
    <main>
   <Navbar />
   <Hero />
   <PopularProducts />
   <SuperQuality />
  <Services />
  <Exclusive />
  <CustomerReviews />
  <Subscribe />
   <Footer />
    </main>
  )
}
