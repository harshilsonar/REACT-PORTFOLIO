import React from "react";
import { motion } from "framer-motion";
import Slider from "./Slider";

const heroSlides = [
  {
    title: "Hi, I'm Harshil Sonar",
    subtitle: "Full-Stack Web Developer • React • Tailwind",
    image: "https://images.businessnewsdaily.com/app/uploads/2022/04/04074553/1554244010.jpeg"
  },
  {
    title: "Building Clean UI",
    subtitle: "Modern, responsive and fast",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Let's Work Together",
    subtitle: "I turn ideas into products",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
  },
];

const Home = () => {
  return (
    <section id="home" className="pt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              React Developer crafting delightful experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-4 text-gray-600"
            >
              I build responsive, accessible and fast websites using React and Tailwind CSS.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 flex gap-3"
            >
              <a href="#projects" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-xl border hover:bg-gray-50 transition">Contact Me</a>
            </motion.div>
          </div>
          <div>
            <Slider slides={heroSlides} interval={4000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
