"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { ArrowRight, Sparkles, Star } from "lucide-react";



export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
<div className="relative mx-auto px-6 py-16 w-full ml-5   text-left">
  {/* Main heading */}
  <h1 className="text-4xl md:text-6xl font-extrabold  text-white leading-5">
    The Ultimate
    <br />
    <span className="text-blue-950">Development Studio</span>
  </h1>

  {/* Description */}
  <p className="max-w-xl mt-6 text-lg md:text-xl text-blue-900-300">
    We craft innovative digital products with modern technologies.  
    Our passionate team of developers and designers brings ideas to life.
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row gap-6 mt-10">
    <button className="px-8 py-4 bg-gradient-to-r from-black to-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:from-amber-600 hover:to-orange-700 transition">
      Start Your Project
    </button>
    <button className="px-8 py-4 bg-black text-white rounded-lg text-lg font-semibold border-2 border-blue-950-500 hover:border-blue-950 transition">
      View Our Work
    </button>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-3 gap-12 mt-16 max-w-xl">
    <div>
      <div className="text-3xl md:text-4xl font-bold text-blue-950">500+</div>
      <div className="text-base text-gray-400">Projects</div>
    </div>
    <div>
      <div className="text-3xl md:text-4xl font-bold text-blue-950">50+</div>
      <div className="text-base text-gray-400">Team</div>
    </div>
    <div>
      <div className="text-3xl md:text-4xl font-bold text-blue-950">15+</div>
      <div className="text-base text-gray-400">Years</div>
    </div>
  </div>
</div>

  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
