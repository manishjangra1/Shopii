import { Link } from "react-router-dom";
import { motion } from "motion/react";
// import { motion } from "motion";
import heroImg from "../../assets/shopii-hero.webp";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Shopii"
        className="w-full h-[300px] md:h-[600px] lg:h-[700px] object-cover"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="text-center text-shopii-gray p-6">
          {/* <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4"> */}
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4"
          >
            Unleash <br /> Your <br /> Style
          </motion.h1>
          {/* <p className="text-sm tracking-tighter md:text-lg mb-6"> */}
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm tracking-tighter md:text-lg mb-6"
          >
            Explore our vacation-ready outfits with fast worldwide shipping.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link
              to="/collections/all"
              className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg text-nowrap"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
