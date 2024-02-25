"use client";

import HeroCarousel from "@/components/HeroCarousel";
import CustomCarousel from "@/components/CustomCarousel";
import Login from "@/components/Login";
import RLayout from "@/components/RLayout";
import Signup from "@/components/Signup";
import { motion } from "framer-motion";
import CustomCarousel2 from "@/components/CustomCarousel2";

export default function Home() {
  return (
    <section className="lg:m-60">
      <CustomCarousel2 />
      {/* <HeroCarousel /> */}
      {/* <RLayout /> */}
      {/* <Signup /> */}

      {/* <Login /> */}

      {/* <motion.div animate={{ x: 250 }}>Hello World!</motion.div> */}
      {/* <div>
        <CustomCarousel />
      </div> */}
    </section>
  );
}
