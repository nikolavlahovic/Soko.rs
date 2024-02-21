"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightpink">
      <div className="flex justify-center items-center h-[800px] sm:h-[900px] bg-cover bg-[url('/images/Banner/Patrick.jpg')] sm:bg-[url('/images/Banner/Steve.jpg')]">
        <h1 className="text-white text-[100px] sm:text-[200px]">SOKO.rs</h1>
      </div>
    </div>
  );
};

export default Banner;
