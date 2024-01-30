"use client";

import CustomCarousel from "@/components/CustomCarousel";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section>
      <motion.div animate={{ x: 250 }}>Hello World!</motion.div>
      <div>
        <CustomCarousel />
      </div>
    </section>
  );
}
