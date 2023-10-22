import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  bigShoe4,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  thumbnailShoe4,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
  { href: "/", label: "Sign-in/Register" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
  {
    thumbnail: thumbnailShoe4,
    bigShoe: bigShoe4,
  },
];

export const statistics = [
  { value: "10k+", label: "Brands" },
  { value: "800+", label: "Shops" },
  { value: "500k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "AirMax Fusion X",
    price: "530.70",
    rating: 4.7,
  },
  {
    imgURL: shoe5,
    name: "Zoom Ultra Boost",
    price: "210.40",
    rating: 4.3,
  },
  {
    imgURL: shoe6,
    name: "React Volt Runner",
    price: "228.90",
    rating: 4.9,
  },
  {
    imgURL: shoe7,
    name: "Lunar Blaze Elite",
    price: "230.20",
    rating: 4.8,
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Quick Delivery",
    subtext:
      "Enjoy seamless shopping with our fast and reliable delivery service.",
  },
  {
    imgURL: shieldTick,
    label: "Payment Security",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Dedicated Support",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Md Nasim Hosen",
    rating: 4.7,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Himu Sharkar",
    rating: 4.9,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "mdnasimhosen333@gmail.com", link: "mmdnasimhosen333@gmail.com" },
      { name: "+880 1722142333", link: "tel:+880 1722142333" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
