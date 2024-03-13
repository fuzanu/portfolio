"use client";

import React from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 pt-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating highschool in{" "}
        <span className="font-medium">philology</span>, I wanted to pursue a
        career in the <span className="font-medium"> movie industry </span> and
        I went to <span className="italic"> Film School</span>, worked in TV
        industry for 9 months and then I decided I wanted a career change. I
        have spent the last year learning how to{" "}
        <span className="font-medium">code</span> and build{" "}
        <span className="font-medium">websites</span>. I am always looking
        forward to use different{" "}
        <span className="font-medium">technologies</span>, expand my{" "}
        <span className="italic">knowledge </span>
        and most importantly <span className="underline">have fun</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, listen to music, watch movies. I'm also learning how to
        <span className="font-medium"> produce</span> music in the meantime.
      </p>
    </motion.section>
  );
}
