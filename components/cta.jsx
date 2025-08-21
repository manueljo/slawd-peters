'use client';

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


const Cta = () => {
  const router = useRouter();

  return (
    <section className="min-h-[20rem] w-full max-w-[1440px] mx-auto px-4 py-8 flex items-center justify-center flex-col">
      <h2 className="text-4xl font-bold mb-3">Get Started With Us</h2>
      <p className="text-center max-w-2xl">
        At SLAWD PETERS Engineering, we are committed to excellence — from
        delivering reliable engineering solutions to raising a new generation of
        craftsmen. Partner with us today to experience precision, durability,
        and hands-on expertise.
      </p>
      <Button className="mt-4 bg-blue-900 text-white hover:bg-blue-700 transition-colors" onClick={() => router.push('/contact')}>
        Contact Us
      </Button>
    </section>
  );
};

export default Cta;
