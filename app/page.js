"use client";

import CustomCarousel from "@/components/CustomCarousel";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="">
      <Signup />

      {/* <Login /> */}

      {/* <motion.div animate={{ x: 250 }}>Hello World!</motion.div>
      <div>
        <CustomCarousel />
      </div> */}
    </section>
  );
}
