import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { portfolioContent } from "@/utils/content";
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          sectionEyebrow="happy clients"
          sectionTitle="What Clients say about me"
          sectionSubtitle="Don't just take my word for it. See what my clients have to say about my work"
        />
        <div className="-my-4 mt-12 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-20">
          <div className="flex flex-none animate-move-left gap-8 pr-8 [animation-duration:90s] hover:[animation-play-state:paused]">
            {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
            {Array.from({ length: 2 }).map((_) =>
              portfolioContent.testimonialContent.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="max-w-xs p-6 transition duration-300 hover:-rotate-3 md:max-w-md md:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex size-14 shrink-0 items-center       justify-center rounded-full bg-gray-700">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm md:mt-6 md:text-base">
                    {testimonial.text}
                  </p>
                </Card>
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
