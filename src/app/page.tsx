"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowBuildHydra from "@/components/HowBuildHydra";
import HydraTechnologies from "@/components/HydraTechnologies";
import Introduction from "@/components/Introduction";
import JoinHydra from "@/components/JoinHydra";
import SideMenu from "@/components/SideMenu";
import TopMenu from "@/components/TopMenu";
import WhyBuild from "@/components/WhyBuild";
import "aos/dist/aos.css";
import { useRef, useState } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const howToRef = useRef<HTMLDivElement>(null);
  const technoRef = useRef<HTMLDivElement>(null);
  const joinHydraRef = useRef<HTMLDivElement>(null);
  const whyBuild = useRef<HTMLDivElement>(null);
  let [isSideBarMenuOpen, setIsSideBarMenuOpen] = useState<boolean>(false);

  const scrollToHowBuild = () => {
    howToRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToIntro = () => {
    introRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWhyBuild = () => {
    whyBuild.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTechnologies = () => {
    technoRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToJoinHydra = () => {
    joinHydraRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsSideBarMenuOpen((prev) => !prev);
  };
  return (
    <>
      <TopMenu
        scrollToHowBuild={scrollToHowBuild}
        scrollToAbout={scrollToAbout}
        scrollToIntro={scrollToIntro}
        scrollToWhyBuild={scrollToWhyBuild}
        scrollToTechnologies={scrollToTechnologies}
        scrollToJoinHydra={scrollToJoinHydra}
        toggleMenu={toggleMenu}
      />
      <SideMenu
        isOpen={isSideBarMenuOpen}
        toggleMenu={toggleMenu}
        scrollToHowBuild={scrollToHowBuild}
        scrollToAbout={scrollToAbout}
        scrollToWhyBuild={scrollToWhyBuild}
        scrollToTechnologies={scrollToTechnologies}
        scrollToJoinHydra={scrollToJoinHydra}
      />
      <Header />
      <Introduction aboutRef={aboutRef} />
      <WhyBuild whyBuild={whyBuild} />
      <HydraTechnologies technoRef={technoRef} />
      <HowBuildHydra howToRef={howToRef} />
      <JoinHydra joinHydraRef={joinHydraRef} />
      <Footer />
    </>
  );
}
