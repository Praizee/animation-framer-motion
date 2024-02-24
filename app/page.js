"use client";

import HeroCarousel from "@/components/HeroCarousel";
import CustomCarousel from "@/components/CustomCarousel";
import Login from "@/components/Login";
import RLayout from "@/components/RLayout";
import Signup from "@/components/Signup";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="m-60">
      <HeroCarousel />
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
