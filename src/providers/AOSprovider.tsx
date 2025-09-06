"use client";
import React, { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return <>{children}</>;
}
