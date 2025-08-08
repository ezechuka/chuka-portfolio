"use client";

/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Image from "next/image";
import memojiComputer from "@/assets/images/memoji-computer.png";
import { portfolioContent } from "@/utils/content";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative z-0 overflow-clip py-32 md:py-48 lg:py-60"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute -z-30 size-full opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />

        <div className="hero-ring size-[620px]" />
        <div className="hero-ring size-[820px]" />
        <div className="hero-ring size-[1020px]" />
        <div className="hero-ring size-[1220px]" />

        <HeroOrbit
          size={430}
          rotation={-14}
          orbitDuration="10s"
          spinDuration="5s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          orbitDuration="15s"
          spinDuration="5s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          orbitDuration="20s"
          spinDuration="5s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          orbitDuration="20s"
          spinDuration="5s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={144}
          orbitDuration="25s"
          spinDuration="5s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={144}
          orbitDuration="30s"
          spinDuration="5s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          orbitDuration="35s"
          spinDuration="5s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={30}
          orbitDuration="40s"
          spinDuration="5s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container isolate">
        <div className="flex flex-col items-center">
          <Image
            src={memojiComputer}
            className="size-[100px]"
            alt="Memoji computer"
          />
          <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="relative size-2.5 rounded-full bg-green-500">
              <div className="absolute inset-0 animate-ping rounded-full bg-green-500" />
            </div>
            <p className="text-sm font-medium">Available for new projects</p>
          </div>
        </div>

        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
            {portfolioContent.heroContent.heroTitle}
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            {portfolioContent.heroContent.heroSubtitle}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <button
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6"
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>

          <a target="_blank" href="https://linkedin.com/in/iameze/">
            <button className="inline-flex h-12 items-center gap-2 rounded-xl border-white bg-white px-6 text-gray-900">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
