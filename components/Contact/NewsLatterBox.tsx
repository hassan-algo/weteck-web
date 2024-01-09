"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div
      className="wow fadeInUp dark:bg-gray-dark relative z-10 rounded-sm  p-8 sm:p-11 lg:p-8 xl:p-11 h-full"
      data-wow-delay=".2s"
    >
      <Image src={'/images/contact-us-illustration.png'} alt="Contact Us" fill className="object-contain relative" />              
    </div>
  );
};

export default NewsLatterBox;
