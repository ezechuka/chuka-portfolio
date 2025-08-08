"use client";

import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import ToolboxItems from "@/components/ToolboxItems";
import { portfolioContent } from "@/utils/content";
import edoMap from "@/assets/images/edo-map.png";
import chukaAvatar from "@/assets/images/chuka-avatar.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const constrainRef = useRef(null);
  return (
    <div id="about" className="py-20">
      <div className="container">
        <SectionHeader
          sectionEyebrow="About me"
          sectionTitle="A Glimpose into my world"
          sectionSubtitle="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="mx-auto mt-2 w-40 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />

              <ToolboxItems
                items={portfolioContent.aboutContent.toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />

              <ToolboxItems
                items={portfolioContent.aboutContent.toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="flex h-[320px] flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="p-6"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {portfolioContent.hobbyContent.hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="portfolio-theme-gradient absolute inline-flex items-center gap-2 rounded-full px-6 py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="relative h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={edoMap}
                alt="Edo state"
                className="size-full object-cover"
              />
              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2  -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
                <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]" />
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400" />
                <Image src={chukaAvatar} alt="My avatar" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
