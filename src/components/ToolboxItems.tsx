import React from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  className?: string;
  itemsWrapperClassName?: string;
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName,
        )}
      >
        {Array.from({ length: 2 }).map(() =>
          items.map((item) => (
            <div
              key={item.title}
              className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
            >
              <TechIcon component={item.iconType} />
              <span className="font-semibold">{item.title}</span>
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default ToolboxItems;
